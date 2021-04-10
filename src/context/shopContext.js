import {createContext, useReducer, useContext} from "react"

import {shopReducer, INITIAL_STATE} from "../reducers/shop/shop.reducer"

const ShopContext = createContext()

export const ShopProvider = ({children}) => {
    const [shopState, dispatchToShop] = useReducer(shopReducer, INITIAL_STATE)
    return (
        <ShopContext.Provider value={{shopState, dispatchToShop}}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShop = () => useContext(ShopContext)
