import {ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, LOGGER, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from './cart.types'

export const INITIAL_STATE = {
    cart: [],
    wishlist: []
}

/**
* * Schema of product  
  
    product {
        id:1,
        title:'...',
        price:'...',
        category:'...',
        description:'...',
        image:'...'
    }

*/

export const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const isProductAdded = state.cart.find(
                (item) => item.id === action.payload.id
            )
            return {
                ...state,
                cart: isProductAdded
                    ? state.cart.map(
                        (item) =>
                            item.id === action.payload.id
                                ? {
                                    ...item,
                                    quantity: item.quantity + 1
                                }
                                : item
                    ) : [...state.cart, {...action.payload, quantity: 1}]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) =>
                        item.id !== action.payload.id
                )
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(
                    (item) =>
                        item.id === action.payload.id
                            ? ({
                                ...item,
                                quantity: item.quantity + 1
                            })
                            : (item)
                )
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(
                    (item) =>
                        item.id === action.payload.id
                            ? ({
                                ...item,
                                quantity: item.quantity - 1
                            })
                            : (item)
                )
            }
        case ADD_TO_WISHLIST:
            const isPresent = state.cart.find(
                (item) => item.id === action.payload.id
            )
            if (!isPresent) return {...state, wishlist: [...state.wishlist, action.payload]}
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter(
                    (item) =>
                        item.id !== action.payload.id
                )
            }
        case LOGGER:
            console.log(state, action)
            break
        default:
            return state
    }

}