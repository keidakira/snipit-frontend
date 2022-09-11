import SnippetProps from "./props";

import {SnippetContainer, SnippetMain, SnippetOptions} from "./styles";
import {SnippetAPI} from "../../api/snippet";

import "./styles.css";
import {decryptUserSnippet} from "../../services/crypto.service";

const Snippet = ({id, name, code, url}: SnippetProps) => {
    const formattedCode = decryptUserSnippet(code);

    const copyCodeToClipboard = async (code: string) => {
        navigator.clipboard.writeText(code)
            .then(
                () => console.log("Copied code snippet!"),
                () => console.log("Something went wrong!")
            );
    };

    const deleteSnippet = async (id: string | undefined) => {
        if (id === undefined) {
            window.alert("Invalid request!");
            return;
        }

        const confirmDelete = window.confirm("Do you want to delete this snippet? You cannot undo this action!")

        if (!confirmDelete) return;

        const response = await SnippetAPI.deleteASnippet(id);

        if (!response.error) {
            window.alert("Deleted the snippet!");
        } else {
            window.alert("Error deleting the snippet. Please try again later.");
        }
        window.location.reload();
    }

    return (
        <SnippetContainer className="snippet-container" id={id}>
            <SnippetMain className="snippet">
                <p className="name">{name}</p>
                <pre>{formattedCode}</pre>
                <SnippetOptions className="snippet-options">
                    {url && <a href={url} target={"_blank"}>
                        <span>source</span>
                    </a>}
                    <span onClick={() => deleteSnippet(id)}>delete</span>
                    <span onClick={() => copyCodeToClipboard(formattedCode)}>copy</span>
                </SnippetOptions>
            </SnippetMain>
        </SnippetContainer>
    )
}


export default Snippet;