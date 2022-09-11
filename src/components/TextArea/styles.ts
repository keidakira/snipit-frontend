import styled from "styled-components";

export const Container = styled.div`
    margin: 4px 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 480px;
  resize: none;
  padding: 12px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
  }
`;