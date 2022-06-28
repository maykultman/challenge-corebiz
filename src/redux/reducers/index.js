import { combineReducers } from 'redux';
import items from './cartReducer';
import products from './productsReducer';
export default combineReducers({
	items,
	products
});