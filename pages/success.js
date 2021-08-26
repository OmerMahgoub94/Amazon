import Header from "../components/Header"
import { CheckCircleIcon } from "@heroicons/react/solid"
import { useRouter } from "next/dist/client/router";

function success() {
    const router = useRouter();
    return (
        <div className="bg-gray-100 h-screen">
            <Header />
            <main className=" max-w-screen mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <CheckCircleIcon className="h-10 text-green-500" />
                        <h1 className="text-3xl">
                            Thank you, your order has been confirmed!
                        </h1>
                    </div>
                    <p>
                        Thank you for shopping with us.
                        We'll send a confirmation once your item has shipped.
                        It you would like to check the status of you order(s),
                        please press the button below
                    </p>
                    <button onClick={() => router.push('/orders')} className="button mt-8">My Orders</button>
                </div>
            </main>
        </div>

    )
}

export default success
