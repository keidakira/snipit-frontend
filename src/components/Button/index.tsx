import ButtonProps from "./props";

import {StyledButton, Container} from "./styles";
import React, {useState} from "react";

const Button = ({title, isPrimary, loadingText, onClick}: ButtonProps) => {
    const [buttonText, setButtonText] = useState<string>(title);

    const handleOnClick = (event: React.FormEvent<HTMLButtonElement>) => {
        setButtonText(loadingText ?? title);
        onClick(event);
        setButtonText(title)
    }

    return (
        <Container>
            <StyledButton isPrimary={isPrimary} title={""} onClick={handleOnClick}>
                {buttonText}
            </StyledButton>
        </Container>
    );
};


export default Button;