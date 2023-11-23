import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import "./Form.scss"

const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password is too short - should be 4 chars min"),
})

const initialValues = {
    email: "",
    password: "",
}

const SignInForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik
                return (
                    <div className="container">
                        <h1>Sign in</h1>
                        <p>Log in to your account to continue.</p>
                        <Form>
                            <div className="form-row">
                                <label htmlFor="email">Email Address</label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={
                                        errors.email && touched.email
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={
                                        errors.password && touched.password
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className="error"
                                />
                            </div>
                            <a className="forgot_password" href="/forgot-password">Forgot password?</a>
                            <button
                                type="submit"
                                className={
                                    !(dirty && isValid) ? "disabled-btn" : ""
                                }
                                disabled={!(dirty && isValid)}
                            >
                                Sign In
                            </button>
                            <p className="no_account">Don't have an account?&nbsp;<a href="/signup">Sign up</a></p>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default SignInForm
