import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'

import {useCart} from '../../context/cartContext'

import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

const Header = () => {

    const {cartState} = useCart()

    return (
        <div className="flex flex-row justify-between w-full p-2 shadow-md">
            <Link href='/'>
                <a className='justify-center items-center flex'>
                    <Image
                        src='/favicon.ico'
                        alt='Miku Mart'
                        height='50'
                        width='50'
                    />
                    <span className='text-lg font-bold px-2 hidden sm:block'>Miku Mart</span>
                </a>
            </Link>

            <Searchbar />

            <div className="flex items-center">
                <Link href='/products'>
                    <Button>
                        SHOP
                    </Button>
                </Link>

                <Link href='/wishlist'>
                    <Button>
                        <Badge query={cartState.wishlist.length} />
                        <AiOutlineHeart className='text-lg sm:text-2xl' />
                    </Button>
                </Link>

                <Link href='/cart'>
                    <Button>
                        <Badge query={cartState.cart.length} />
                        <AiOutlineShoppingCart className='text-lg sm:text-2xl' />
                    </Button>
                </Link>

            </div>

        </div>
    )
}

export default Header