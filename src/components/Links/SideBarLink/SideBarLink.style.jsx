import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    font-size: 12px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Badge = styled.div`
  position: absolute;
  padding: 0.5px 5.5px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 50%;
  right: 8px;
  transform: translateY(-50%);

  font-size: 12px;
  border-radius: 12px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.grayEmpty};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Container = styled(NavLink)`
  position: relative;
  padding: 12px 8px;
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  border-bottom: solid 1px rgba(189, 188, 188, 0.5);

  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  &:hover {
    border-bottom-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:hover,
  &:hover ${Title}, &:hover ${Badge} {
    color: ${(props) => props.theme.colors.textDark};
  }

  &:hover ${Badge} {
    background-color: ${(props) => props.theme.colors.text};
  }

  &.active {
    border-bottom-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary};
  }

  &.active,
  &.active ${Title}, &.active ${Badge} {
    color: ${(props) => props.theme.colors.textDark};
  }

  &.active ${Badge} {
    background-color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: fit-content;
    padding: 4px 8px;
    border-radius: 15px;
    border-bottom: none;

    &.active,
    &:hover {
      color: ${(props) => props.theme.colors.primary};
      background-color: transparent;
    }

    &.active,
    &.active ${Title}, &:hover ${Title} {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
