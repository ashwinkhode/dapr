import Image from 'next/image'

import Button from '../Button/Button'

import {handleAddToWishlist, handleDecreaseQuantity, handleIncreaseQuantity, handleRemoveFromCart, logger} from '../../reducers/cart/cart.actions'
import {useCart} from '../../context/cartContext'

const CartItem = ({product}) => {

    const {id, title, price, description, category, image, quantity} = product
    const {cartState, dispatchToCart} = useCart()

    const handleDecreaseButtonClick = (product) => {
        if (product.quantity === 1) {
            dispatchToCart(handleRemoveFromCart(product))
        } else {
            dispatchToCart(handleDecreaseQuantity(product))
        }

    }

    return (
        <div className='relative flex justify-start p-4 lg:p-4 border border-gray-100 shadow-sm'>
            <div className="relative h-full mr-4">
                <div className='relative h-[100px] w-[100px] overflow-hidden object-fill'>
                    <Image
                        src={image}
                        alt={title}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>

            <div className="flex flex-col gap-y-2">
                <div>
                    <h1 className='font-semibold'>{title}</h1>
                    <h2 className='text-gray-500 capitalize'>{category}</h2>
                </div>

                <div className='flex items-center text-center'>
                    <Button
                        variant='secondary'
                        className='rounded-full'
                        circular
                        onClick={
                            () => handleDecreaseButtonClick(product)
                        }
                    >-</Button>
                    <Button className='cursor-default'>{quantity}</Button>
                    <Button
                        variant='secondary'
                        className='rounded-full'
                        circular
                        onClick={
                            () => dispatchToCart(handleIncreaseQuantity(product))
                        }
                    >+</Button>
                </div>
                <div>
                    <p className='font-bold text-xl sm:text-xl my-2'>${price}
                        <span className='font-normal opacity-60 text-xs sm:text-sm line-through ml-2'>
                            ${+price + 100}
                        </span>
                    </p>
                </div>
                <div className='flex gap-x-2 sm:gap-x-6 '>
                    <Button
                        padding='p-0'
                        onClick={
                            () => {
                                // TODO: Gotta use Redux Thunk here
                                dispatchToCart(handleRemoveFromCart(product))
                                // dispatchToCart(handleAddToWishlist(product))
                            }
                        }
                    >SAVE FOR LATER</Button>
                    <Button
                        padding='p-0'
                        onClick={
                            () => dispatchToCart(handleRemoveFromCart(product))
                        }
                    >REMOVE</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem