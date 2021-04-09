import {useState} from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import {AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiOutlineDelete} from 'react-icons/ai'
import toast from 'react-hot-toast';

import {discountCalc, isPresentHelper} from '../../utils/productHelper'
import {useCart} from '../../context/cartContext'
import {handleAddToCart, handleAddToWishlist, handleRemoveFromCart, handleRemoveFromWishlist} from '../../reducers/cart/cart.actions'

import Button from '../Button/Button'

const ProductDetails = ({product}) => {

    const {id, title, price, category, mrp, image, description} = product
    const {cartState, dispatchToCart} = useCart()
    const [quantity, setQuantity] = useState(1)
    const isPresentInWishlist = isPresentHelper(cartState.wishlist, product)
    const isPresentInCart = isPresentHelper(cartState.cart, product)
    const notify = (text) => toast.success(text)

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between sm:justify-center w-full h-full lg:min-h-[87vh] lg:h-[80vh] py-4'>
            <div className="relative w-full lg:w-1/3 h-[50vh]">
                <Image
                    src={image}
                    alt='Product'
                    layout='fill'
                    objectFit='contain'
                />
            </div>

            <div className="flex flex-col justify-between w-full lg:w-2/3 gap-y-2 sm:gap-y-4 mt-4 lg:mt-0 lg:px-16">
                <p className='text-xs text-gray-500'>Product Code: <span className='font-bold'>#000{id}</span></p>
                <div className="relative">
                    <h1 className='font-bold text-lg sm:text-xl opacity-80'>{title}</h1>
                    <h2 className='my-1 font-semibold text-base sm:text-sm text-gray-500'>{category}</h2>
                    <p className='text-xs sm:text-sm text-gray-500'>
                        {description}
                    </p>
                </div>
                <p className='font-bold text-lg sm:text-xl'>
                    ${price}
                    <span className='font-normal opacity-60 text-xs sm:text-sm line-through mx-2'>
                        ${mrp}
                    </span>
                    <span className='font-bold text-gray-500 text-xs sm:text-sm'>
                        {discountCalc(price, mrp)}% OFF
                    </span>
                </p>
                <div className='flex items-center text-center mb-2'>
                    <p className='mr-2'>Qty: </p>
                    <div>
                        <Button
                            variant='secondary'
                            className='rounded-full'
                            circular
                            onClick={
                                () => {
                                    if (quantity > 1) {setQuantity(quantity - 1)}
                                }
                            }
                        >-</Button>
                        <Button className='cursor-default'>{quantity}</Button>
                        <Button
                            variant='secondary'
                            className='rounded-full'
                            circular
                            onClick={
                                () => setQuantity(quantity + 1)
                            }
                        >+</Button>
                    </div>
                </div>
                <div className="relative w-full justify-between inline-flex flex-row flex-wrap">
                    <Button
                        className='w-[49%]'
                        variant={isPresentInWishlist ? 'primary' : 'secondary'}
                        onClick={() => {
                            isPresentInWishlist ? dispatchToCart(handleRemoveFromWishlist(product)) : dispatchToCart(handleAddToWishlist(product))
                            isPresentInWishlist ? notify('Removed from Wishlist') : notify('Added to Wishlist')
                        }
                        }
                    >
                        {
                            isPresentInWishlist ? <AiFillHeart /> : <AiOutlineHeart />
                        }
                        {
                            isPresentInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
                    </Button>
                    <Button
                        className='w-[49%]'
                        variant={isPresentInCart ? 'danger' : 'primary'}
                        onClick={() => {
                            isPresentInCart ? dispatchToCart(handleRemoveFromCart(product)) : dispatchToCart(handleAddToCart(product, quantity))
                            isPresentInCart ? notify('Removed from Cart') : notify('Added to Cart')
                        }
                        }
                    >
                        <span>
                            {
                                isPresentInCart ? <AiOutlineDelete /> : <AiOutlineShoppingCart />
                            }
                        </span>
                        {
                            isPresentInCart ? 'Remove from Cart' : 'Add to Cart'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails