import {useCart} from '../context/cartContext'

import CartItem from '../components/CartItem/CartItem'
import Button from '../components/Button/Button'
import EmptyState from '../components/EmptyState/EmptyState'
import SEO from '../components/SEO/SEO'

const Cart = () => {

    const {cartState} = useCart()

    const amount = cartState.cart.reduce((acc, {price, quantity}) => {
        return acc + (price * quantity)
    }, 0)

    const totalPricePerItem = cartState.cart.reduce((acc, {price}) => {
        return acc + price
    }, 0)

    return cartState.cart.length === 0
        ? (
            <div className="text-center mx-auto lg:w-1/3">
                <SEO pageTitle='Cart' />
                <EmptyState page='cart' />
            </div>
        )
        : (
            <div className='mx-auto flex flex-col lg:flex-row justify-center gap-x-4'>
                <SEO pageTitle='Cart' />
                <div className="flex flex-col justify-start lg:w-2/3 mb-2 shadow-md border border-gray-100">
                    <h1 className='font-bold text-2xl p-4'>My Cart ({cartState.cart.length})</h1>
                    {
                        cartState.cart.map(
                            (item) => (
                                <CartItem key={item.id} product={item} />
                            ))
                    }
                </div>
                <div className='my-4 lg:my-0 lg:w-1/3'>
                    <div className='flex flex-col border border-gray-100 shadow-md gap-y-2 p-4'>
                        <h1 className='font-semibold text-gray-500'>PRICE DETAILS</h1>
                        <div className='flex flex-row justify-between'>
                            <span>Price ({cartState.cart.length} item(s))</span>
                            <span>${totalPricePerItem}</span>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <span>Discount</span>
                            <span>$299</span>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <span>Delivery Charges</span>
                            <span>FREE</span>
                        </div>
                        <hr />
                        <div className='flex flex-row justify-between font-bold'>
                            <span>Total Amount</span>
                            <span>$
                            {
                                    amount
                                }
                            </span>
                        </div>
                        <div>
                            <Button variant='primary' fullWidth>Place Order</Button>
                        </div>
                        <p className='text-gray-500 text-xs capitalize'>Total price incl GST*</p>
                    </div>
                </div>
            </div>
        )
}


export default Cart