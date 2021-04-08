import Image from 'next/image'
import {AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {discountCalc} from '../../utils/productHelper'
import Button from '../Button/Button'

const ProductDetails = ({product: {id, title, price, category, mrp, image, description}}) => {
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
                <p className='font-bold text-lg sm:text-xl mb-2'>
                    ${price}
                    <span className='font-normal opacity-60 text-xs sm:text-sm line-through mx-2'>
                        ${mrp}
                    </span>
                    <span className='font-bold text-gray-500 text-xs sm:text-sm'>
                        {discountCalc(price, mrp)}% OFF
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