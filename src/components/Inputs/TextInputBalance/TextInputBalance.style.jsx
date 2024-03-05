import styled from "styled-components";

export const Balance = styled.div`
  min-width: fit-content;
  flex: 0 0 auto;
  font-weight: 300;
  font-size: 15px;
  text-align: right;
  color: ${(props) => props.theme.colors.textGray};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  width: 339px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 10px;
  border: solid 1px
    ${(props) =>
      props.iserror ? props.theme.colors.error : props.theme.colors.grayLight};

  @media (max-width: 1024px) {
    width: 337px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    padding: 0;
    border: none;
  }
`;

export const Input = styled.input`
  flex: 1 1 auto;
  background-color: transparent;
  min-width: 0;
  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  line-height: 140%;

  color: ${(props) => props.theme.colors.text};

  border: none;
  outline: none;

  &::placeholder {
    font-weight: 300;
    color: ${(props) => props.theme.colors.textGray};
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 12px 16px;

    border-bottom: solid 1px
      ${(props) =>
        props.iserror
          ? props.theme.colors.error
          : props.theme.colors.grayLight};
  }
`;
