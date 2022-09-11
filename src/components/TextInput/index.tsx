import TextInputProps from "./props";

import {Container, Input} from "./styles";

const TextInput = ({type, name, placeholder, onChange, value, autofocus, className}: TextInputProps) => {
    return (
        <Container className={"input-container"}>
            <Input type={type}
                   className={className === undefined ? "input-box" : "input-box " + className}
                   name={name}
                   placeholder={placeholder}
                   autoFocus={autofocus ?? undefined}
                   onChange={onChange}
                   value={value}
            />
        </Container>
    );
}


export default TextInput;