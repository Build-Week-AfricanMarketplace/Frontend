import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../Styles/styles.css';

function UserLogin({ errors, touched, isSubmitting }) {
    return (
        <div>
            <div className="nav">
            <p>Sauti.</p>
            <Nav>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about/">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/services/">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/news/">News & Updates</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contact/">Contact</NavLink>
                </NavItem>
            </Nav>
            </div>
            <Form>
                <div className="container">
                <div className="input">
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type="username" name="username" placeholder="Username" />
                </div>
                <div className="input">
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                </div>
                <a className="forgot" href="/forgot/">Forgot Password?</a>
                <button className="signin" disabled={isSubmitting}>Sign In</button>
                </div>
            </Form>
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
            .required("Username is a required field"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is a required field")
    }),

    handleSubmit(values, {resetForm, setSubmitting }) {
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