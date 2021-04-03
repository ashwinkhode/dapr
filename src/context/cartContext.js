import {createContext, useContext, useReducer} from 'react'
import {cartReducer, INITIAL_STATE} from '../reducers/cart/cart.reducer'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartState, dispatchToCart] = useReducer(cartReducer, INITIAL_STATE)
    return (
        <CartContext.Provider value={{cartState, dispatchToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)