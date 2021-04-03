import {createContext, useContext, useReducer} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer)
    return (
        <CartContext.Provider value={state, dispatch}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)