export const ADD_ITEM = 'ADD_ITEM'
export const ADD_DATA_ITEM = 'ADD_DATA_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const RESET_CART = 'RESET_CART'

export const addItem = (items) => ({
	type: ADD_ITEM,
	payload: items
})

export const resetItems = () => ({
	type: RESET_CART,
	payload: []
})