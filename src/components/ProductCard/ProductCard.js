import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import toast from 'react-hot-toast';

import Button from '../Button/Button'

import {handleAddToCart, handleAddToWishlist, handleRemoveFromWishlist, logger} from '../../reducers/cart/cart.actions'
import {useCart} from '../../context/cartContext'
import {isPresentHelper, discountCalc} from '../../utils/productHelper'

const notify = (text) => toast.success(text)

const ProductCard = ({product}) => {

    const {id, title, price, mrp, category, image} = product
    const {cartState, dispatchToCart} = useCart()
    const isProductAddedToWishlist = isPresentHelper(cartState.wishlist, product)

    return (
        <div className="w-1/2 flex flex-col justify-between overflow-hidden md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-1 lg:w-1/5 xl:my-2 xl:px-1 xl:w-1/5 hover:z-10 sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow border border-gray-100">
            <div className="relative w-full overflow-hidden">
                <div>
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2 z-10 focus:outline-none transition-transform transform duration-300 hover:scale-150  active:scale-100 outline-none"
                        onClick={
                            () => {
                                isProductAddedToWishlist
                                    ? dispatchToCart(handleRemoveFromWishlist(product))
                                    : dispatchToCart(handleAddToWishlist(product))
                                isProductAddedToWishlist
                                    ? notify('Removed from Wishlist')
                                    : notify('Added to Wishlist')
                            }}
                    >
                        {
                            isProductAddedToWishlist ? <AiFillHeart className='text-red-500' /> : <AiOutlineHeart />
                        }
                    </button>
                    <span className='absolute bg-gray-200  text-xs font-bold rounded-sm top-2 left-2 px-2 py-1 z-10'>-{discountCalc(price, mrp)}%</span>
                    <div
                        className='relative p-2 min-w-full h-[40vh] min-h-full object-fill'>
                        <Link href={`product/${id}`}>
                            <a>
                                <Image
                                    src={image}
                                    alt={title}
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='relative px-4 py-2 w-full'>
                    <Link href={`product/${id}`}>
                        <a>
                            <h1 className='font-bold text-base sm:text-xl capitalize opacity-80'>{category}</h1>
                            <p className='my-1 text-xs sm:text-sm text-gray-500 '>{title}</p>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="description p-4 flex flex-col justify-between">
                <div>
                    <p className='font-bold text-base sm:text-xl mb-2'>${price}
                        <span className='font-normal opacity-60 text-xs sm:text-sm line-through ml-2'>
                            ${mrp}
                        </span>
                    </p>
                </div>
                <Button variant='primary' onClick={() => {
                    dispatchToCart(handleAddToCart(product))
                    notify('Added to Cart')
                }
                }>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard