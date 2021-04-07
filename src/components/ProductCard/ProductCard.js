import Image from 'next/image'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

import Button from '../Button/Button'

import {handleAddToCart, handleAddToWishlist, handleRemoveFromWishlist, logger} from '../../reducers/cart/cart.actions'
import {useCart} from '../../context/cartContext'
import isPresentHelper from '../../utils/isPresentHelper'

const ProductCard = ({product}) => {

    const {id, title, price, description, category, image} = product
    const {cartState, dispatchToCart} = useCart()
    const isProductAddedToWishlist = isPresentHelper(cartState.wishlist, product)

    return (
        <div className="w-1/2 flex flex-col justify-between overflow-hidden md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-1 lg:w-1/5 xl:my-2 xl:px-1 xl:w-1/5 sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow border border-gray-100">
            <div className="relative w-full overflow-hidden">
                <div>
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2 z-10 focus:outline-none transition-transform transform duration-300 hover:scale-150 outline-none"
                        onClick={
                            () => isProductAddedToWishlist
                                ? dispatchToCart(handleRemoveFromWishlist(product))
                                : dispatchToCart(handleAddToWishlist(product))}
                    >
                        {
                            isProductAddedToWishlist ? <AiFillHeart className='text-red-500' /> : <AiOutlineHeart />
                        }
                    </button>
                    <span className='absolute bg-gray-200  text-xs font-bold rounded-sm top-2 left-2 px-2 py-1 z-10'>-49%</span>
                    <div
                        className='relative p-2 min-w-full h-[40vh] min-h-full object-fill'>
                        <Image
                            src={image}
                            alt={title}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
                <div className='relative px-4 py-2 w-full'>
                    <h1 className='font-bold text-base sm:text-xl capitalize opacity-80'>{category}</h1>
                    <p className='my-1 text-xs sm:text-sm text-gray-500 '>{title}</p>
                </div>
            </div>
            <div className="description p-4 flex flex-col justify-between">
                <div>
                    <p className='font-bold text-base sm:text-xl mb-2'>${price}
                        <span className='font-normal opacity-60 text-xs sm:text-sm line-through ml-2'>
                            ${+price + 100}
                        </span>
                    </p>
                </div>
                <Button variant='primary' onClick={() => dispatchToCart(handleAddToCart(product))}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard