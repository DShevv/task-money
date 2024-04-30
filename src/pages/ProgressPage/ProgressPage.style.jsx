import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1137px;

  @media (max-width: 1024px) {
    padding: 20px 16px 0 16px;
  }
`;

export const ProgressInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding: 19px;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 628px) {
    padding: 18px;
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 628px) {
    justify-content: space-between;
    font-size: 17px;
  }
`;

export const Caption = styled.p`
  margin: 0 auto;
  margin-top: 4px;
  margin-bottom: 2px;
  max-width: 556px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  text-align: center;

  color: ${(props) => props.theme.colors.text};

  @media (max-width: 600px) {
    margin: 0;
    text-align: left;
  }
`;

export const ProgressLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
