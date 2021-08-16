import Header from "../components/Header"
import Image from 'next/image'
import { useSelector } from "react-redux";
import { selectBasketTotal, selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/client";

function Checkout({ img }) {
    const basket = useSelector(selectItems);
    const [session] = useSession();
    const basketTotal = useSelector(selectBasketTotal);

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
                                    <Currency quantity={basketTotal} currency="QAR" />
                                </span>
                            </h2>

                            <button disabled={!session}
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
