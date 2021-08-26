import { getSession, useSession } from "next-auth/client"
import Header from "../components/Header"
import db from '../firebase'
import moment from 'moment'
import Order from "../components/Order"

function orders({ orders }) {
    console.log("order")
    console.log('orders', orders)
    let myvar;
    console.log('yoooo')
    const [session] = useSession();
    return (
        <div>
            <Header />

            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl text-amazon_blue-light border-b pb-1 mb-2 border-yellow-400">
                    Your Order(s)
                </h1>
                {session ? (
                    <h2>{orders?.length} Orders</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders?.map(({ id, amount, amountShipping, items, timestamp, images }) => (
                        <Order
                            id={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    ))}
                </div>
            </main>

        </div>
    )
}


export default orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // Get the logged in user 
    const session = await getSession(context);
    if (!session) {
        return {
            props: {}
        };
    }

    console.log('sssssession', session)

    // firebase db
    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();

    // Stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items:
                (await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
                ).data,
        }))
    );

    return {
        props: {
            orders,
            session
        }
    }
}
