import Header from "../components/Header"
import Image from 'next/image'

function Checkout({ img }) {
    return (
        <div className="bg-gray-100">
            <Header />
            <div className="px-10 mx-auto my-10">
                <h1 className="my-5 text-2xl">Shopping basket</h1>
                <hr className="border black" />
                <div className="flex">
                    <div className="py-5">
                        <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                            width={300}
                            height={150}
                            objectFit="cover"
                        />
                    </div>
                    <div className="py-7 -mt-3 mx-5 flex flex-col">
                        <h2 className="text-xl flex-grow">Opna Women's Short Sleeve Moisture</h2>
                        <div className="justify-end">
                            <p className="text-green-700 text-sm">In stock</p>
                            <p className="text-xs font-semibold">Category: <span className="font-light">Women Clothing</span></p>
                        </div>
                    </div>
                </div>

                <hr className="border black" />
                <div className="flex">
                    <div className="py-5">
                        <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                            width={300}
                            height={150}
                            objectFit="cover"
                        />
                    </div>
                    <div className="py-7 -mt-3 mx-5 flex flex-col">
                        <h2 className="text-xl flex-grow">Opna Women's Short Sleeve Moisture</h2>
                        <div className="justify-end">
                            <p className="text-green-700 text-sm">In stock</p>
                            <p className="text-xs font-semibold">Category: <span className="font-light">Women Clothing</span></p>
                        </div>
                    </div>
                </div>

                <hr className="border black" />
                <div className="flex">
                    <div className="py-5">
                        <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                            width={300}
                            height={150}
                            objectFit="cover"
                        />
                    </div>
                    <div className="py-7 -mt-3 mx-5 flex flex-col">
                        <h2 className="text-xl flex-grow">Opna Women's Short Sleeve Moisture</h2>
                        <div className="justify-end">
                            <p className="text-green-700 text-sm">In stock</p>
                            <p className="text-xs font-semibold">Category: <span className="font-light">Women Clothing</span></p>
                        </div>
                    </div>
                </div>


            </div>





        </div>
    )
}

export default Checkout
