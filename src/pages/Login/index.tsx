// In-built components
import React, {useState} from "react";

// Custom components
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

// Styles
import './style.scss';
import {UserAPI} from "../../api/user";
import ErrorText from "../../components/ErrorText";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const [loginError, setLoginError] = useState<string>("");

    const handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };

    const loginUser = async (event: React.FormEvent<HTMLButtonElement>) => {
        let hasErrors = false;
        setEmailError("");
        setPasswordError("");

        if (email === "") {
            setEmailError("Email cannot be empty");
            hasErrors = true;
        }

        if (password === "") {
            setPasswordError("Password cannot be empty");
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        try {
            const response = await UserAPI.loginUser(email, password);

            if (response.error) {
                setLoginError(response.message);
            } else {
                window.location.assign("dashboard");
            }
        } catch (e) {
            console.error("Error occurred");
        }
    }

    return (
        <div className="App">
            <div className="container">
                <h2 className="title">SnipIt</h2>
                <TextInput
                    type={"text"}
                    name={"Email"}
                    placeholder={"Email"}
                    autofocus={true}
                    onChange={handleEmail}
                    error={emailError}
                />
                <TextInput
                    type={"password"}
                    name={"Password"}
                    placeholder={"Password"}
                    onChange={handlePassword}
                    error={passwordError}
                />
                {loginError && <ErrorText text={loginError} center={true}/>}
                <Button
                    title={"Login"}
                    isPrimary={true}
                    onClick={loginUser}
                    loadingText={"Logging..."}
                />
                <span className="link-text">
                        <Link to="/signup">
                            Don't have an account? Create one
                        </Link>
                </span>
            </div>
        </div>
    );
};


export default LoginPage;