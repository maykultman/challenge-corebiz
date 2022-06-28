export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'

export const fetchPosts = () => (dispatch) => {
	
	dispatch({ type : FETCH_PRODUCTS_REQUEST });
	const url = 'https://corebiz-test.herokuapp.com/api/v1/products';
	fetch(url)
	.then(res=>res.json())
	.then(products=>{
		dispatch({
			type: FETCH_PRODUCTS_SUCCESS,
			payload: {
				products : products
			}
		})
	})
	.catch(error => {
		dispatch({
			type: FETCH_PRODUCTS_ERROR,
			error: error.toString(),
		})
	})
}