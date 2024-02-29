import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TaskImage = styled.img`
  width: 93px;
  height: 93px;
  border-radius: 50%;

  @media (max-width: 1024px) {
    height: 44px;
    flex: 0 0 44px;
    max-width: 44px;
  }
`;

export const Title = styled.h6`
  margin-top: 10px;

  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    margin-top: 0;
    flex: 1 1 auto;
    font-size: 14px;
  }
`;

export const Income = styled.div`
  margin-top: 27px;

  font-weight: 600;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    flex: 0 0 80px;
    font-size: 14px;
    margin-top: 0;
  }
`;

export const Container = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  width: 360px;
  height: 230px;
  padding-top: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: all 0.1s ease;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:hover ${Income}, &:hover ${Title} {
    color: ${(props) => props.theme.colors.textDark};
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    padding: 16px 12px;
    gap: 12px;
    width: 100%;
    height: fit-content;
  }
`;
