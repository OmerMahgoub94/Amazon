import Header from "../components/Header"
import Image from 'next/image'
import { useSelector } from "react-redux";
import { selectBasketTotal, selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter';
import { getSession, useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {

    const basket = useSelector(selectItems);
    const [session] = useSession();
    const basketTotal = useSelector(selectBasketTotal);

    const createCheckoutSession = async () => {

        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            basket,
            email: session.user.email
        })

        // Redirect user to stripe checkout page
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if (result.error) {
            alert(result.error.message)
        }
    }

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj"
                        width={1020} height={250} objectFit="contain" />

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-2xl border-b pb-4">
                            {basket.length === 0 ? "Your shopping basket is empty." : "Shopping Basket"}
                        </h1>

                        {basket.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                product={item} />
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {basket.length > 0 &&
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({basket.length}) items: {" "}
                                <span className="font-bold">
                                    <Currency quantity={basketTotal} currency="USD" />
                                </span>
                            </h2>

                            <button role="link"
                                disabled={!session}
                                onClick={createCheckoutSession}
                                className={`button mt-2 ${!session &&
                                    "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "
                                    }`}
                            >
                                {!session ? "Sign in to checkout" : "Proceed to Checkout"}
                            </button>
                        </>
                    }
                </div>

            </main>
        </div>
    )
}

export default Checkout

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session

        }
    }
}
