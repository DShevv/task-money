import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;

  li {
    width: 100%;
  }

  @media (max-width: 1024px) {
    position: relative;
    width: calc(100% + 32px);
    left: -16px;
  }
`;

export const Item = styled(NavLink)`
  width: 100%;
  padding: 19px 26px 18px 26px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 26px;
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.secondary};

  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    border-bottom-color: ${(props) => props.theme.colors.primary};
  }

  &:hover div {
    color: ${(props) => props.theme.colors.textDark};
  }

  @media (max-width: 1024px) {
    padding: 15px 16px 14px 16px;
    font-size: 12px;

    :nth-child(3) {
      text-align: right;
    }
    :nth-child(1) {
      text-align: left;
    }
  }
`;
