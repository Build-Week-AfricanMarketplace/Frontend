import React , { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

// import { Button, Label, Input, FormGroup } from 'reactstrap';
import NextBackNavigation from './NextBackNavigation';
import SignUpFormImage from '../assets/sun-wide.png'


const img = `url('${SignUpFormImage}')`;


const SignUpForm = ({errors, touched}) => {


useEffect(() => {
    axios  
            .get('https://build-week-africanmarketplace.herokuapp.com/api/users')
                .then(res => {
                    console.log('Get Success', res)
                })
                .catch(err => {
                    console.log(err.response);
                })

},[]);

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

const imgContainer = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
}

const mainImg = {
    height: '135px',
    backgroundImage: img,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '48px',
    // maxWidth: '375px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    lineHeight: '59px',
    width: '100%'
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

        <div class='SignUpFormPage' >
            <NextBackNavigation />
            <div style={imgContainer} className='imageContainer'>
                <div style={mainImg}>
                    <h2>Sauti</h2>
                </div>
            </div>
            <div style={containerStyle} className='sign-up-container'>

                <Form style={formStyle}>

                        <h2 style={labelStyle}>YOUR INFORMATION</h2>
                        {touched.username && errors.username && <p>{errors.username}</p>}
                        <Field style={inputStyle} type="text" name="username"  placeholder="USERNAME" />
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <Field style={inputStyle} type="email" name="email"  placeholder="EMAIL" />
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <Field style={inputStyle} type="password" name="password" placeholder="PASSWORD" />
                
                    <button style={buttonStyle} type='submit'>Sign Up</button>

                </Form>
            </div>

        </div>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({username, password, email}) {
        return {
            username: '',
            password: '',
            email: ''
        };
    },
    handleSubmit(values, {setStatues, resetForm}) {
        console.group('submitting...', values);
        axios
            .post("https://build-week-africanmarketplace.herokuapp.com/api/auth/register", values)
            .then(res => {
                console.log('Post Success', res)
                resetForm();
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
            .min(6, "Password must be at least 6 characters")
            .required("email is a required field")
    }),

})(SignUpForm);

export default FormikSignUpForm;