import {ADD_ITEM, RESET_CART} from '../actions/cartActions';
const initialState = {
	items : [],
	data : {}
};
function items(state=initialState, action) {
	
	switch (action.type){
		case ADD_ITEM :
			return {
				...state,
				items: [
					action.payload,
					...state.items,
				]
			}
		case RESET_CART :
			return {
                ...state,
                items: action.payload
            }
		default: 
			return state
	}
}
export default items;