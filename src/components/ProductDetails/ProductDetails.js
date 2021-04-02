import Image from 'next/image'
import {AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import Button from '../Button/Button'

const ProductDetails = () => {
    return (
        <div className='flex flex-col items-center justify-between sm:justify-center w-full h-[87vh] sm:h-[80vh]'>
            <div className="relative sm:w-[50%] sm:h-[50%] w-full h-1/3">
                <Image
                    src='/product.jpeg'
                    alt='Product'
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <div className="flex flex-col justify-between sm:w-[50%] gap-y-2 sm:gap-y-4 p-4">
                <p className='text-xs text-gray-500'>Product Code: <span className='font-bold'>#0001</span></p>
                <div className="relative">
                    <h1 className='font-bold text-lg sm:text-xl opacity-80'>Casual Sneakers Shoes For Men Sneakers For Men</h1>
                    <h2 className='my-1 font-semibold text-base sm:text-sm text-gray-500'>By Robbie Jones</h2>
                    <p className='text-xs sm:text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit repellendus commodi tempora voluptatem nulla pariatur consectetur perferendis nesciunt ipsa iusto ea nisi possimus, sint ullam necessitatibus nihil quam. Molestiae!
                    </p>
                </div>
                <p className='font-bold text-lg sm:text-xl mb-2'>Rs. 2,999
                    <span className='font-normal opacity-60 text-xs sm:text-sm line-through mx-2'>
                        Rs. 5,999
                    </span>
                    <span className='font-bold text-gray-500 text-xs sm:text-sm'>
                        60% off
                    </span>
                </p>
                <div className="relative w-full justify-between inline-flex flex-row flex-wrap">
                    <Button
                        className='w-[49%]'
                        variant='secondary'
                    >
                        <AiOutlineHeart />
                        Add to Wishlist
                    </Button>
                    <Button
                        className='w-[49%]'
                        variant='primary'
                    >
                        <span>
                            <AiOutlineShoppingCart />
                        </span>
                        Add to Cart
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails