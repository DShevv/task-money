import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 140%;

  color: ${(props) =>
    props.$iserror ? props.theme.colors.error : props.theme.colors.text};
`;

export const Input = styled(Field)`
  padding: 12px 16px;
  padding-right: 44px;
  width: 100%;
  background-color: transparent;

  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text};

  border: none;
  outline: none;
  border-radius: 10px;
  border: solid 1px
    ${(props) =>
      props.$iserror ? props.theme.colors.error : props.theme.colors.grayLight};

  &::placeholder {
    color: ${(props) => props.theme.colors.textGray};
  }
`;

export const Eye = styled.div`
  position: absolute;
  right: 16px;
  bottom: 15.2px;

  cursor: pointer;
  user-select: none;
  color: ${(props) =>
    props.$isactive
      ? props.theme.colors.primary
      : props.theme.colors.grayLight};
`;
