import {FILTER, FILTER_STATUS, SORT_PRODUCTS, SORT_STATUS} from './shop.types'

export const handleSort = (sort) => ({
    type: SORT_PRODUCTS,
    payload: {
        sort,
    },
})

export const handleFilter = (filters) => ({
    type: FILTER,
    payload: {
        filters
    },
})

export const handleFilterStatus = (filterStatus) => ({
    type: FILTER_STATUS,
    payload: filterStatus
})


export const handleSortStatus = (sortStatus) => ({
    type: SORT_STATUS,
    payload: sortStatus
})

