import {ADD_TO_CART, REMOVE_FROM_CART} from './cart.types'

const INITIAL_STATE = {}

export const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                action.payload
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                action.payload
            }
        default:
            return state
    }

}