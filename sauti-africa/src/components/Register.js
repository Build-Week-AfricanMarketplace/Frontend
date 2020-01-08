import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Register = props => {

    const {
        errors,
        touched
    } = props;

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
    })

    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const register = e => {
        e.preventDefault();
        console.log(credentials);
        //axiosWithAuth()  
        axios  
            .post(`https://build-week-africanmarketplace.herokuapp.com/api/auth/register`,
                credentials,
            )
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/market-price');
            })
            .catch(err => {
                console.log("there was an error");
                console.log(err);
            })
    }


    const inputStyle = {

        marginBottom: '20px',
        fontFamily: 'Quicksand',
        border: '1px solid #000000',
        borderRadius: '4px',
        paddingLeft: '10px',
        fontSize: '1rem',
        width: '100%'
    }
    
    const labelStyle = {
        fontFamily: 'Raleway',
        color: '#000000',
        textAlign: 'left',
        padding: '20px',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '18px'
    }
    
    const containerStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        width: '100%'
    }
    
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        // minHeight: '50vh',
        width: '100%',
        margin: '20px',
        maxWidth: '375px'
    }
    

    

    
    const buttonStyle = {
        background: '#000000',
        borderRadius: '4px',
        color: 'white',
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: 'bold'
    }

    return (
        <div className="home-page">
            <h1>Please Register Below:</h1>
            <button onClick={() => console.log(props.history.goBack())}>go back</button>
            <button onClick={() => console.log(props.history.goForward())}>go forward</button>

            <div className="addFormStyles">
                {/* <form className="regFormStyles">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input className="titleStyles"
                            type="text"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input className="titleStyles2"
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input className="titleStyles"
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                        />
                    </div>                    
                    <button onClick={register} className="postButton">Register</button>
                </form> */}
                <Form style={formStyle}>

                    <h2 style={labelStyle}>YOUR INFORMATION</h2>

                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field style={inputStyle} type="text" name="username"  placeholder="USERNAME" />

                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field  style={inputStyle} type="email" name="email"  placeholder="EMAIL" />

                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field  style={inputStyle} type="password" name="password" placeholder="PASSWORD" />

                    <button style={buttonStyle} type='submit'>Sign Up</button>
                </Form>
            </div>
        </div>
    );
}

const FormikRegister = withFormik({
    mapPropsToValues({username, password, email}) {
        return {
            username: '',
            password: '',
            email: ''
        };
    },
    handleSubmit(values, {props, setStatues, resetForm}) {
        console.group('submitting...', values);
        axiosWithAuth()
            .post("https://build-week-africanmarketplace.herokuapp.com/api/auth/register", values)
            .then(res => {
                console.log('Post Success', res)
                localStorage.setItem('token', res.data.payload);
                // resetForm();
                props.history.push('/market-price');
                console.log(localStorage)
            })
            .catch(err => {
                console.log(err.response);

            })
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is a required field"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is a required field"),
        email: Yup.string()
            .email('Invalid Email')
            .required("email is a required field")
    }),

})(Register);

export default FormikRegister;