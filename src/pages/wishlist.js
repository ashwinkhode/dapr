import WishlistItem from '../components/WishlistItem/WishlistItem'

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

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col justify-start lg:w-1/2 mb-2 shadow-md border border-gray-100">
                <h1 className='font-bold text-2xl p-4'>My Wishlist</h1>
                <WishlistItem product={fakeItem} />
                <WishlistItem product={fakeItem} />
                <WishlistItem product={fakeItem} />
                <WishlistItem product={fakeItem} />
            </div>
        </div>
    )
}

export default Wishlist