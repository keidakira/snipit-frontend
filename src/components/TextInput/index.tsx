import TextInputProps from "./props";

import {Container, Input} from "./styles";

import "./styles.scss";

const TextInput = ({type, name, placeholder, onChange, value, autofocus, className, error}: TextInputProps) => {
    let classes = "input-box";

    if (className) {
        classes += " " + className;
    }

    if (error) {
        classes += " " + "error";
    }

    return (
        <Container className={"input-container"}>
            <Input
                type={type}
                className={classes}
                name={name}
                placeholder={placeholder}
                autoFocus={autofocus ?? undefined}
                onChange={onChange}
                value={value}
            />
            {error && <span className="error-text">{error}</span>}
        </Container>
    );
}


export default TextInput;