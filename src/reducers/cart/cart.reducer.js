import {ADD_TO_CART, REMOVE_FROM_CART, LOGGER} from './cart.types'

export const INITIAL_STATE = {
    cart: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case REMOVE_FROM_CART:
            return {
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case LOGGER:
            console.log(state, action)
            break
        default:
            return state
    }

}