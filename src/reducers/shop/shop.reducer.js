import {FILTER, FILTER_STATUS, SORT_PRODUCTS, SORT_STATUS} from './shop.types'

export const INITIAL_STATE = {
    sortStatus: false,
    filterStatus: false,
    sort: null,
    filters: {
        // in_stock: false,
        men_clothing: false,
        women_clothing: false,
        jewelery: false,
        electronics: false,
    },
}

export function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SORT_PRODUCTS:
            return {
                ...state,
                sort: action.payload.sort,
                sortStatus: false
            }
        case FILTER:
            return {
                ...state,
                filters: action.payload.filters,
                filterStatus: false
            }
        case FILTER_STATUS:
            return {
                ...state,
                filterStatus: !action.payload,
                sortStatus: false
            }
        case SORT_STATUS:
            return {
                ...state,
                sortStatus: !action.payload,
                filterStatus: false
            }
        default:
            return {...state}
    }
}