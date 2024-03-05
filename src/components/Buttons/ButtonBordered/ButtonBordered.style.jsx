import styled from "styled-components";
import { StyledButton } from "../Button/Button.style";

export const StyledThin = styled(StyledButton)`
  padding: 12px 40px;
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }

  &.mobile {
    display: none;
  }

  @media (max-width: 770px) {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }

    border: none;

    color: ${(props) => props.theme.colors.textGrayLight};
  }

  @media (max-width: 600px) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;
