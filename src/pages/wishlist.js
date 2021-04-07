import WishlistItem from '../components/WishlistItem/WishlistItem'
import SEO from '../components/SEO/SEO'
import EmptyState from '../components/EmptyState/EmptyState'

import {useCart} from '../context/cartContext'

const Wishlist = () => {

    const {cartState, dispatchToCart} = useCart()

    return cartState.wishlist.length === 0
        ? (
            <div className="text-center mx-auto lg:w-1/3">
                <SEO pageTitle='Wishlist' />
                <EmptyState page='wishlist' />
            </div>
        )
        : (
            <div className='flex justify-center'>
                <SEO pageTitle='Wishlist' />
                <div className="flex flex-col justify-start lg:w-1/2 mb-2 shadow-md border border-gray-100">
                    <h1 className='font-bold text-2xl p-4'>My Wishlist</h1>
                    {
                        cartState.wishlist.map(
                            (item) => <WishlistItem key={item.id} product={item} dispatchToCart={dispatchToCart} />
                        )
                    }
                </div>
            </div>
        )
}

export default Wishlist