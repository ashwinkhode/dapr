import {isPresentHelper} from '../../utils/productHelper'

import {ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, LOGGER, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SAVE_FOR_LATER, MOVE_TO_CART} from './cart.types'

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
            const isProductAddedToCart = isPresentHelper(state.cart, action.payload)
            return {
                ...state,
                cart: isProductAddedToCart
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
        case SAVE_FOR_LATER:
            const isPresentInWishlist = isPresentHelper(state.wishlist, action.payload)
            return {
                cart: state.cart.filter(
                    (item) =>
                        item.id !== action.payload.id
                ),
                wishlist: !!isPresentInWishlist ? [...state.wishlist] : [...state.wishlist, action.payload]
            }
        case ADD_TO_WISHLIST:
            const isProductAddedToWishlist = isPresentHelper(state.wishlist, action.payload)
            if (!isProductAddedToWishlist) return {...state, wishlist: [...state.wishlist, action.payload]}
            break
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter(
                    (item) =>
                        item.id !== action.payload.id
                )
            }
        case MOVE_TO_CART:
            const isPresentInCart = isPresentHelper(state.cart, action.payload)
            return {
                cart: !!isPresentInCart ? [...state.cart] : [...state.cart, {...action.payload, quantity: 1}],
                wishlist: state.wishlist.filter(
                    (item) =>
                        item.id !== action.payload.id
                ),
            }
        case LOGGER:
            console.log(state, action)
            break
        default:
            return state
    }

}