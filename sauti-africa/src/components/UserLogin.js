import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import NextBackNavigation from './NextBackNavigation';
import {
    inputStyle,
    labelStyle,
    containerStyle,
    formStyle,
    imgContainer,
    mainImg,
    buttonStyle
}
    from '../Styles/UserLoginStyles';

function UserLogin({ errors, touched, isSubmitting }) {



    return (

        <div className='SignUpFormPage' >
            <NextBackNavigation />
            <div style={imgContainer} className='imageContainer'>
                <div style={mainImg}>
                    <h2>Login</h2>
                </div>
            </div>
            <div style={containerStyle} className='sign-up-container'>

                <Form style={formStyle}>
                    <Field style={inputStyle} type="text" name="username" placeholder="USERNAME" />
                    {touched.username && errors.username && <div style={{ color: "red", textAlign: "left" }}>
                        {errors.username}
                    </div>}

                    <Field style={inputStyle} type="password" name="password" placeholder="PASSWORD" />
                    {touched.password && errors.password && <div style={{ color: "red", textAlign: "left" }}>
                        {errors.password}
                    </div>}
                    <button style={buttonStyle} type='submit'>SUBMIT</button>
                </Form>
            </div>

        </div>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("*Username is a required field"),
        password: Yup.string()
            .min(6, "*Password must be at least 6 characters")
            .required("*Password is a required field")
    }),

    handleSubmit(values, { resetForm, setSubmitting }) {

        console.log(values);
        axios
            .post("https://build-week-africanmarketplace.herokuapp.com/api/auth/login", values)
            .then(res => {
                console.log(res);
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });
    }
})(UserLogin);


export default FormikLoginForm;