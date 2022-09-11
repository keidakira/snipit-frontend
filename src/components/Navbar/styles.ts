import styled from "styled-components";

export const NavWrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  padding: 16px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background-color: white;
`;

export const Container = styled.div`
  margin: 0 16px;
  padding: 0 8px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;