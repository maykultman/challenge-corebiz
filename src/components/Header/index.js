import { connect } from 'react-redux';
import { resetItems } from '../../redux/actions/cartActions';

import './index.css';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import logo from './logo.svg';

const Header = ({items, dispatch}) =>{
    const reset = () => {
        dispatch( resetItems() );
    }
    return <>
    <header className="justify-content-center py-4">
        <div className="container">
            <div className="row">
               
                <div className="col-3 col-sm-6 col-md-3 col-lg-2 d-flex w-logo d-block d-md-none">
                    <span>&#9776;</span>
                </div>
                <div className="col-6 col-sm-6 col-md-3 col-lg-2 w-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-7 w-search">
                    <form className="form-search">
                        <input type="text" name="" className="form-control rounded-0 border-0 border-bottom" placeholder="¿Qué estás buscando?"/>
                        <AiOutlineSearch/>
                    </form>
                </div>
                <div className="col-3 col-sm-6 col-md-3 col-lg-3 d-flex align-items-center w-cart">
                    <span className="mx-2 d-none d-sm-block d-md-block d-lg-block"> <FaRegUser/> Mi cuenta</span>
                    <span className="mx-2 shoppingCart" onClick={reset} title="Click para resetear el carrito"><AiOutlineShoppingCart/>
                        { items.items.length > 0 ? <span className="circle">{items.items.length}</span> : '' }
                    </span>
                </div>
            </div>
        </div>
    </header>
    </>
}

export default connect((state)=>{
    return state
})(Header)