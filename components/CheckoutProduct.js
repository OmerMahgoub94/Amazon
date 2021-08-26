import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({ product: { id, title, price, description, category, image, hasPrime, rating } }) {
    const dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image}
                width={200}
                height={200}
                objectFit="cover"
            />

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex ">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500 my-1" />
                        ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>

                <Currency quantity={price} currency='USD' />



                {hasPrime && (
                    <div className="flex items-center space-x-4">
                        <img
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt="" />
                        <p className="text-xs text-gray-500">FREE NEXT DAY DELIVERY</p>
                    </div>
                )}
            </div>

            {/* Right */}
            <div className="flex flex-col space-y-2 my-auto justify-self-center">
                {/* <button className="button">Checkout</button> */}
                <button onClick={removeItemFromBasket} className="button">Remove from Cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
