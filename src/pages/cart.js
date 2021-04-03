import {useCart} from '../context/cartContext'

const Cart = () => {

    const {cartState, dispatchToCart} = useCart()

    return (
        <div>
            {
                cartState.cart.map(
                    (item) => (
                        <div>{`${item.title} $${item.price} Qty: ${item.quantity}`}</div>
                    ))
            }
        </div>
    )
}

export default Cart