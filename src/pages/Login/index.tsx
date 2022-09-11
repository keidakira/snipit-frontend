// In-built components
import React, {useState} from "react";

// Custom components
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

// Styles
import './style.css';

const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };

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
                />
                <TextInput
                    type={"password"}
                    name={"Password"}
                    placeholder={"Password"}
                    onChange={handlePassword}
                />
                <Button title={"Login"} isPrimary={true}/>
            </div>
        </div>
    );
};


export default LoginPage;