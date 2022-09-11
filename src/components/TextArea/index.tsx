import TextAreaProps from "./props";

import {Container, TextArea} from "./styles";

import "./styles.scss";

const TextAreaInput = ({name, placeholder, onChange, value, className, error}: TextAreaProps) => {
    let classes = "";

    if (className) {
        classes += " " + className;
    }

    if (error) {
        classes += " " + "error";
    }

    return (
        <Container className={"input-container"}>
            <TextArea
                   className={classes}
                   name={name}
                   placeholder={placeholder}
                   onChange={onChange}
                   value={value}
            />
            {error && <span className="error-text">{error}</span>}
        </Container>
    );
}


export default TextAreaInput;