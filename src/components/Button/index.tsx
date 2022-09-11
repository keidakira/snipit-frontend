import ButtonProps from "./props";

import {StyledButton, Container} from "./styles";

const Button = ({title, isPrimary}: ButtonProps) => {
    return (
        <Container>
            <StyledButton isPrimary={isPrimary} title={""}>
                {title}
            </StyledButton>
        </Container>
    );
};


export default Button;