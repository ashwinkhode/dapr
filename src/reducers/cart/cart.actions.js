import {ADD_TO_CART, REMOVE_FROM_CART, LOGGER} from './cart.types';

export const handleAddToCart = (product) => ({type: ADD_TO_CART, payload: product})

export const handleRemoveFromCart = (product) => ({type: REMOVE_FROM_CART, payload: product})

export const logger = (product) => ({type: LOGGER, payload: product})