import ButtonProps from "./props";

import {StyledButton, Container} from "./styles";
import React from "react";

const Button = ({title, isPrimary, onClick, type}: ButtonProps) => {
    return (
        <Container>
            <StyledButton isPrimary={isPrimary} title={""} onClick={onClick} type={type || "submit"}>
                {title}
            </StyledButton>
        </Container>
    );
};


export default Button;