import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  gap: 10px;
  border: none;
  flex-wrap: wrap;
`;

export const RadioBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 16px 24px;
    font-weight: 700;
  }

  @media (max-width: 390px) {
    padding: 16px 20px;
  }
`;

export const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;

  &:checked + ${RadioBtn} {
    color: ${(props) => props.theme.colors.textDark};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
