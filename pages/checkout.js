import Header from "../components/Header"
import Image from 'next/image'

function Checkout({ img }) {
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                <div className="flex-grow m-5 shadow-">
                    <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" />

                    <div className="flex flex-col p-5 spacy-y-10 bg-white">
                        <h1>Your shopping basket </h1>
                    </div>
                </div>
            </main>

            {/* <h1 className="my-5 text-2xl">Shopping basket</h1>
            <hr className="border black" />
            <div className="flex">
                <div className="py-5">
                    <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                        width={200}
                        height={250}
                        objectFit="cover"
                    />
                </div>
                <div className="py-7 -mt-3 mx-5 flex flex-col">
                    <h2 className="text-xl flex-grow">Opna Women's Short Sleeve Moisture</h2>
                    <h2 className="text-xl flex-grow">Opna Women's Short Sleeve Moisture Opna Women's Short Sleeve Moisture Opna Women's Short Sleeve Moisture  Opna Women's Short Sleeve MoistureOpna Women's Short Sleeve Moisture </h2>
                    <div className="justify-end">
                        <p className="text-green-700 text-sm">In stock</p>
                        <p className="text-xs font-semibold">Category: <span className="font-light">Women Clothing</span></p>
                    </div>
                </div>
            </div>
 */}




        </div>
    )
}

export default Checkout
