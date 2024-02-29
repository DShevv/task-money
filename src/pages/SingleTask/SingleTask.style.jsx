import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 18px;

  span {
    font-size: 14px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 1024px) {
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const TaskInfo = styled.div`
  padding: 24px;
  width: 774px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    position: relative;
    left: -16px;
    width: calc(100% + 32px);
    padding: 18px 28px;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 16px;
  }
`;

export const TaskImage = styled.img`
  flex: 0 0 56px;
  height: 56px;
  max-width: 56px;
  border-radius: 50%;
`;

export const TaskTitle = styled.h2`
  flex: 1 1 auto;

  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const TaskIncome = styled.div`
  flex: 0 0 120px;

  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-align: right;

  @media (max-width: 1024px) {
    font-size: 20px;
    flex: 0 0 105px;
  }
`;

export const TaskText = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const TaskLink = styled.a`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.5px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-offset: 5px;

  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const TaskButtons = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;
