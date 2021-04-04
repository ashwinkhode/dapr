import Image from 'next/image'

import Button from '../Button/Button'

const WishlistItem = ({product}) => {

    const {id, title, price, description, category, image, quantity} = product

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

                <div>
                    <p className='font-bold text-xl sm:text-xl my-2'>${price}
                        <span className='font-normal opacity-60 text-xs sm:text-sm line-through ml-2'>
                            ${+price + 100}
                        </span>
                    </p>
                </div>
                <div className='flex gap-x-2 sm:gap-x-6 '>
                    <Button padding='p-0'>MOVE TO CART</Button>
                    <Button padding='p-0'>REMOVE</Button>
                </div>
            </div>
            {/* <div className='flex sm:hidden'>
                <Button padding='p-0'>SAVE FOR LATER</Button>
                <Button padding='p-0'>REMOVE</Button>
            </div> */}
        </div>
    )
}

export default WishlistItem