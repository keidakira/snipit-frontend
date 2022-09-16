import React, {useState} from "react";

import TextInput from "../../components/TextInput";
import ErrorText from "../../components/ErrorText";
import Button from "../../components/Button";

import {Link} from "react-router-dom";
import {useFormik} from "formik";
import {UserSignupModel} from "../../models/user.model";
import {UserAPI} from "../../api/user";

import {SignupFormErrorProps, SignupFormProps} from "../../validations/user.schema";
import AuthService from "../../services/auth.service";

const Signup = () => {
    const [signupError, setSignupError] = useState<string>("");

    const initialValues: SignupFormProps = {
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        onSubmit: async (values, formikHelpers) => {
            const {setSubmitting, setErrors} = formikHelpers;
            setSubmitting(true);

            const errors: SignupFormErrorProps = {}
            const user: UserSignupModel = values;
            setSignupError("");

            if (!values.email) {
                errors.email = "Email is required";
            }

            if (!values.name) {
                errors.name = "Name is required";
            }

            if (!values.password) {
                errors.password = "Password is required";
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = "Confirm password is required";
            }

            setErrors(errors);

            if (Object.keys(errors).length === 0) {
                const response = await UserAPI.createUser(user);
                if (response.error) {
                    setSignupError(response.message);
                } else {
                    const {id: userId} = response.data;
                    AuthService.addUserToLocalDB(userId);

                    window.location.assign("/dashboard");
                }

                setSubmitting(false);
            }
        },
    });

    return (
        <div className="App">
            <div className="container">
                <h2 className="title">SnipIt</h2>
                <form onSubmit={formik.handleSubmit}>
                    <TextInput
                        type={"text"}
                        name={"email"}
                        placeholder={"Email"}
                        autofocus={true}
                        onChange={formik.handleChange}
                        error={formik.errors.email || ""}
                    />
                    <TextInput
                        type={"text"}
                        name={"name"}
                        placeholder={"Name"}
                        onChange={formik.handleChange}
                        error={formik.errors.name || ""}
                    />
                    <TextInput
                        type={"password"}
                        name={"password"}
                        placeholder={"Password"}
                        onChange={formik.handleChange}
                        error={formik.errors.password || ""}
                    />
                    <TextInput
                        type={"password"}
                        name={"confirmPassword"}
                        placeholder={"Confirm Password"}
                        onChange={formik.handleChange}
                        error={formik.errors.confirmPassword || ""}
                    />
                    <div style={{textAlign: "center"}}>
                        <ErrorText text={signupError} />
                    </div>
                    {
                        !formik.isSubmitting ?
                            <Button
                                isPrimary={true}
                                onClick={() => {
                                    return
                                }}
                                title="Create an Account"
                                type={"submit"}
                            /> :
                            <Button
                                isPrimary={true}
                                onClick={() => {
                                    return
                                }}
                                title="Creating an account..."
                                type={"submit"}
                            />
                    }
                </form>
                <span className="link-text">
                        <Link to="/">
                            Already have an account? Login
                        </Link>
                </span>
            </div>
        </div>
    );
};


export default Signup;