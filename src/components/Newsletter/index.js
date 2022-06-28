import './index.css';
// css
import { BiLoaderAlt } from 'react-icons/bi';

import { useState } from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
let schema = yup.object().shape({
	name: yup.string().required("Nombre requerido"),
	email: yup.string().email("Ops! al parecer el formato de correo no es correcto &#128110;")
});
const initialValues = { name: '', email: ''};
const Newsletter = () => {
    const [success, setSuccess] = useState(true);
    const [message, setMessage] = useState('');
 
    const formik = useFormik({
		initialValues: initialValues, 
		validationSchema:schema,
		onSubmit : ( values ) => {
			setSuccess(false);
            setMessage("response.message");
            fetch(`https://corebiz-test.herokuapp.com/api/v1/newsletter`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response =>{
                setSuccess(true);
                setMessage(response.message);
                formik.resetForm(initialValues);    
            });
		}
	})

    return(
        <div className="newsletter">
            <div className="container py-5">
                <form onSubmit={formik.handleSubmit} className="row  justify-content-center">
                    <div className="col-11 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h3 className="mb-4">¡Únete a nuestras novedades y promociones!</h3>
                    </div>
                    <div className="col-11 col-sm-12 col-md-11 col-lg-9">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <input placeholder="Ingresa tu nombre" 
                                    {...formik.getFieldProps('name')}
                                    className="form-control mb-3"
                                    />
                                    {formik.errors.name ? <div>{formik.errors.name}</div>:null}
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <input placeholder="Ingresa tu email" 
                                    {...formik.getFieldProps('email')}
                                    className="form-control mb-3"/>
                                    <div className="post__content" dangerouslySetInnerHTML={{__html: formik.errors.email}}></div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                {   
                                    success ? 
                                    <input type="submit" className="btn btn-dark d-block mb-3" value="Suscribirme" style={{'width':'100%'}} />
                                    :
                                    <span className="loader"><BiLoaderAlt /></span>
                                }
                            </div>
                            <div className={ message != "" ? "col-12":"d-none"}>
                                <div className="alert alert-success">{message}</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Newsletter;