import styled from "styled-components";

export const SnippetContainer = styled.div`
  width: 100%;
`;

export const SnippetMain = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    color: white;
    position: relative;
    box-sizing: border-box;
    overflow: auto;
    margin-bottom: 16px;
`;

export const SnippetOptions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  position: absolute;
  top: 12px;
  right: 12px;
`;