import styled from "styled-components";
import { StyledButton } from "../../Buttons/Button/Button.style";
import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: fit-content;
  width: 100%;
`;

export const StyledMedium = styled(StyledButton)`
  padding: 14px 0;
  width: 166px;
  max-height: 48px;
  border-width: 2px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
