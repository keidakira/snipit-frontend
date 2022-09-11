import styled from "styled-components";
import ButtonProps from "./props";

export const StyledButton = styled.button<ButtonProps>`
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${props => getPrimaryOrSecondaryObject(props.isPrimary).backgroundColor};
  color: ${props => getPrimaryOrSecondaryObject(props.isPrimary).color};
  border: 1px solid ${props => getPrimaryOrSecondaryObject(props.isPrimary).backgroundColor};
  border-radius: 4px;
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 4px 8px;
`;

const getPrimaryOrSecondaryObject = (isPrimary: boolean) => {
    if (isPrimary)
        return theme.primary;
    return theme.secondary;
};

const theme = {
    primary: {
        backgroundColor: "cornflowerblue",
        color: "white"
    },
    secondary: {
        backgroundColor: "transparent",
        color: "cornflowerblue"
    }
}