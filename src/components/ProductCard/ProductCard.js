import Image from 'next/image'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

import Button from '../Button/Button'

import {handleAddToCart, logger} from '../../reducers/cart/cart.actions'
import {useCart, CartProvider} from '../../context/cartContext'

const ProductCard = ({product}) => {

    const {id, title, price, description, category, image} = product
    const {cartState, dispatchToCart} = useCart()

    return (
        // <div className="flex flex-col w-1/2 sm:max-w-[14rem] text-sm sm:text-base min-w-[6rem] md:min-w-[12rem] lg:min-w-[12rem] sm:rounded sm:shadow-md border border-gray-300">
        <div className="w-1/2 flex flex-col justify-between overflow-hidden md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-1 lg:w-1/5 xl:my-2 xl:px-1 xl:w-1/5 sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow border border-gray-100">
            <div className="relative w-full overflow-hidden">
                <div>
                    <button className="absolute top-2 right-2 bg-white rounded-full p-2 z-10 focus:outline-none outline-none"
                        onClick={() => console.log('wishlist')}
                    >
                        {
                            false ? <AiFillHeart className='text-red-500' /> : <AiOutlineHeart />
                        }
                    </button>
                    <span className='absolute bg-gray-200  text-xs font-bold rounded-sm top-2 left-2 px-2 py-1 z-10'>-49%</span>
                    {/* TODO: Replace img tag with Image component */}
                    <img
                        className='p-2 min-w-full h-[40vh] min-h-full object-fill'
                        src={image}
                        alt={title}
                    />
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