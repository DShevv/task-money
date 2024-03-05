import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  width: fit-content;
  padding: 14px 28px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};

  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textDark};
  }

  @media (max-width: 770px) {
    border-radius: 10px;
    padding: 12px 28px;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 0px;
`;
