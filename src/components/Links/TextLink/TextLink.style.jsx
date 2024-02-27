import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  font-family: "SF Pro Display", sans-serif;
  font-size: 14px;
  line-height: 140%;
  text-decoration: none;
  text-align: center;

  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
