import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  width: fit-content;
  padding: 12px 38px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};

  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.03em;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textDark};
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

export const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 0px;
`;
