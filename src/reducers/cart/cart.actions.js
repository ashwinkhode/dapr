import {ADD_TO_CART, REMOVE_FROM_CART, LOGGER, INCREASE_QUANTITY, DECREASE_QUANTITY, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SAVE_FOR_LATER, MOVE_TO_CART} from './cart.types';

export const handleAddToCart = (product) => ({type: ADD_TO_CART, payload: product})

export const handleRemoveFromCart = (product) => ({type: REMOVE_FROM_CART, payload: product})

export const handleIncreaseQuantity = (product) => ({type: INCREASE_QUANTITY, payload: product})

export const handleDecreaseQuantity = (product) => ({type: DECREASE_QUANTITY, payload: product})

export const handleSaveForLater = (product) => ({type: SAVE_FOR_LATER, payload: product})

export const handleAddToWishlist = (product) => ({type: ADD_TO_WISHLIST, payload: product})

export const handleRemoveFromWishlist = (product) => ({type: REMOVE_FROM_WISHLIST, payload: product})

export const handleMoveToCart = (product) => ({type: MOVE_TO_CART, payload: product})

export const logger = (product) => ({type: LOGGER, payload: product})