import WishlistItem from '../components/WishlistItem/WishlistItem'
import EmptyState from '../components/EmptyState/EmptyState'

import {useCart} from '../context/cartContext'

const Wishlist = () => {

    const fakeItem = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 1
    }

    const {cartState, dispatchToCart} = useCart()

    return cartState.wishlist.length === 0
        ? (
            <div className="text-center mx-auto lg:w-1/3">
                <EmptyState page='wishlist' />
            </div>
        )
        : (
            <div className='flex justify-center'>
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