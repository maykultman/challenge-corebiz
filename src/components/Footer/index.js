import { FaHeadphones } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


import logo from './logo.svg';
import vetex from './vetex.svg';
import './index.css';
const Footer = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container py-2 text-white">
                <div className="row align-items-center justify-content-center">
                    <div className="col-11 col-sm-12 col-md-4 col-lg-4 mb-3">
                        <h4>Ubicación</h4>
                        <p className="my-2">Avenida Andrómeda, 2000, Bloco 6 e B</p>
                        <p className="my-2">Alphavile SP</p>
                        <p className="my-2"><a href="mailto:brasil@corebiz.ag" className="text-white text-decoration-none">  brasil@corebiz.ag</a></p>
                        <p className="my-2"><a href="tel:+55 11 3090 1039" className="text-white text-decoration-none"> +55 11 3090 1039</a></p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <div className="row justify-content-center">
                            <div className="col-10 col-sm-12 col-md-10 col-lg-9 mb-4">
                                <a href="#" className="btn btn-light my-2 d-flex align-items-center cta mb-4"> <HiMail className="justify-self-start"/>  <span>CONTÁCTANOS</span></a>
                                <a href="#" className="btn btn-light my-2 d-flex align-items-center cta mt-4"> <FaHeadphones className="justify-content-center"/> <span>HABLA CON UN CONSULTOR</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <div className="row justify-content-center">
                            <div className="col-12 d-flex justify-content-between">
                                <a href="#" className="text-white text-decoration-none">Desarrollado por<br/><img src={logo} className="App-logo" alt="logo" /></a>
                                <a href="#" className="text-white text-decoration-none">Powered by<br/><img src={vetex} className="App-logo" alt="vetex" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer;