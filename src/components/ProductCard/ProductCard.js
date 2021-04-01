import Image from 'next/image'
import {useState} from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const ProductCard = () => {
    const [state, setState] = useState(false)
    return (
        // <div className="flex flex-col w-1/2 sm:max-w-[14rem] text-sm sm:text-base min-w-[6rem] md:min-w-[12rem] lg:min-w-[12rem] sm:rounded sm:shadow-md border border-gray-300">
        <div className="w-1/2 overflow-hidden md:my-1 md:px-1 md:w-1/3 lg:my-2 lg:px-1 lg:w-1/5 xl:my-2 xl:px-1 xl:w-1/5 sm:shadow-lg sm:hover:shadow-2xl sm:transition-shadow">
            <div className="relative w-full overflow-hidden shadow-sm">
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 z-10 focus:outline-none outline-none"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? <AiFillHeart className='text-red-500' /> : <AiOutlineHeart />
                    }
                </button>
                <span className='absolute bg-white text-xs font-bold rounded-sm top-2 left-2 px-2 py-1 z-10'>-49%</span>
                <img
                    className='min-w-full min-h-full object-fill'
                    src='/product.jpeg'
                    alt='product'
                />
            </div>
            <div className="description p-4">
                <h1 className='font-bold text-base sm:text-xl opacity-80'>Robbie Jones</h1>
                <p className='my-1 text-xs sm:text-sm text-gray-500'>Casual Sneakers Shoes For Men Sneakers For Men</p>
                <p className='font-bold text-base sm:text-xl mb-2'>Rs. 2,999
                <span className='font-normal opacity-60 text-xs sm:text-sm line-through ml-2'>
                        Rs. 5,999
                </span>

                </p>
                <button className='w-full bg-gray-700 text-white py-2'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard