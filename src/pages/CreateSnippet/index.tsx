import Navbar from "../../components/Navbar";
import SpaceSeparator from "../../components/SpaceSeparator";

import {Container} from "./styles";
import TextInput from "../../components/TextInput";
import React, {useState} from "react";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import {SnippetAPI} from "../../api/snippet";
import {AxiosError} from "axios";

const CreateSnippetPage = () => {
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");

    const [code, setCode] = useState<string>("");
    const [codeError, setCodeError] = useState<string>("");

    const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    const handleCodeChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setCode(event.currentTarget.value);
    }

    const createSnippet = async (event: React.FormEvent<HTMLButtonElement>) => {
        setNameError("");
        setCodeError("");

        let hasErrors = false;

        if (name === "") {
            setNameError("Name cannot be empty");
            hasErrors = true;
        }

        if (code === "") {
            setCodeError("Code snippet cannot be empty");
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        try {
            const response = await SnippetAPI.createSnippet(name, code);

            if (response.error) {
                window.alert("Something went wrong. Please try again later!");
            } else {
                window.alert("Successfully created a snippet!");
                window.location.assign("/dashboard");
            }
        } catch (e) {
            console.log(e);
            if (e instanceof AxiosError) {
                window.alert("Something went wrong!");
            } else {
                window.alert("Unknown error occurred!");
            }
        }
    }

    return (
        <>
            <Navbar active={"create-snippet"} />
            <SpaceSeparator height={72} />
            <Container>
                <TextInput
                    name={"name"}
                    placeholder={"What is this snippet about?"}
                    type={"text"}
                    value={name}
                    onChange={handleNameChange}
                    error={nameError}
                />
                <TextArea
                    name={"code-snippet"}
                    value={code}
                    placeholder={"Paste the useful code snippet, you want us to remember..."}
                    onChange={handleCodeChange}
                    error={codeError}
                />
                <div style={{float: 'right'}}>
                    <Button
                        title={"Save Snippet"}
                        isPrimary={true}
                        loadingText={"Saving..."}
                        onClick={createSnippet}
                    />
                </div>
            </Container>
        </>
    )
};


export default CreateSnippetPage;