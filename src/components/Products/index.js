// react
import { useEffect, useCallback } from 'react';

// redux
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/api'
import { addItem } from '../../redux/actions/cartActions';

// css
import { BiLoaderAlt } from 'react-icons/bi';
import './index.css';

// Components
import Loop from './Loop';

const Products = ({dispatch, isFetching, products}) => {
    // Call products
        const initFetch = useCallback(()=>{
            dispatch(fetchPosts());
        },[dispatch]);

        useEffect(() => {
            initFetch();
        }, [initFetch]);
    // End Call products

    const addProduct = (productId) => {
        dispatch( addItem(productId) );
    }
    return(
        <div className="container py-5 mt-2">
            <div className="row">
                <div className="col-12">
                    <h3 className="title-product">Más Vendidos</h3>
                </div>
            </div>
            <div className="row mt-5">
                {   isFetching ? 
                    <span className="loader"><BiLoaderAlt /></span> :
                    <Loop addProduct={addProduct} products={products} />
                }
            </div>
        </div>
    )
}

export default connect((state)=>{
	return state.products
})(Products)