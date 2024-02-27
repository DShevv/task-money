import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

export const Checkmark = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;

  background-color: transparent;
  border: solid 1px ${(props) => props.theme.colors.primary};
  cursor: pointer;

  & path {
    color: transparent;
  }
`;

export const StyledCheckbox = styled(Field)`
  position: absolute;
  opacity: 0;
  width: 20px;
  z-index: -1;

  &:checked ~ ${Checkmark} {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:checked ~ ${Checkmark} path {
    color: black;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  line-height: 140%;
  font-family: "SF Pro Display", sans-serif;

  color: ${(props) => props.theme.colors.text};
`;
