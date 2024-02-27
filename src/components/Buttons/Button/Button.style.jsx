import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 16px 54px;

  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textDark};
  border: solid 1px ${(props) => props.theme.colors.primary};

  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.5px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
  }
`;
