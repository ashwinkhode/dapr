import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'
import {
    AiOutlineShoppingCart,
    AiOutlineHeart,
    AiOutlineSearch,
} from 'react-icons/ai'

import { useCart } from '../../context/cartContext'

import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

const Header = () => {
    const { cartState } = useCart()

    const [searchbarToggle, setSearchbarToggle] = useState(true)

    const visibility = searchbarToggle ? 'hidden' : ''

    return (
        <div className="w-full mx-auto sticky inset-0 bg-[#F5F4FA] z-[100]">
            <div className="w-[80%] mx-auto">
                <div className="flex flex-row items-center justify-between w-full p-4">
                    <Link href="/">
                        <a className="justify-center items-center flex">
                            <Image
                                src="/logo.png"
                                alt="Dapr"
                                height="50"
                                width="100"
                            />
                        </a>
                    </Link>

                    <div className="h-full w-full hidden sm:flex justify-center items-center">
                        <Searchbar />
                    </div>

                    <div className="flex items-center">
                        <Link href="/products">
                            <a>
                                <Button className="hidden sm:block">
                                    SHOP
                                </Button>
                            </a>
                        </Link>
                        <Button
                            className="sm:hidden"
                            onClick={() => setSearchbarToggle(!searchbarToggle)}
                        >
                            <a>
                                <AiOutlineSearch className="text-lg sm:text-2xl " />
                            </a>
                        </Button>
                        <Link href="/wishlist">
                            <a>
                                <Button>
                                    <Badge query={cartState.wishlist.length} />
                                    <AiOutlineHeart className="text-lg sm:text-2xl" />
                                </Button>
                            </a>
                        </Link>
                        <Link href="/cart">
                            <a>
                                <Button>
                                    <Badge query={cartState.cart.length} />
                                    <AiOutlineShoppingCart className="text-lg sm:text-2xl" />
                                </Button>
                            </a>
                        </Link>
                    </div>

                </div>
                <div
                    className={clsx(
                        visibility,
                        'w-full p-2 h-[10vh] sm:hidden',
                    )}
                >
                    <Searchbar />
                </div>
            </div>
        </div>
    )
}

export default Header
