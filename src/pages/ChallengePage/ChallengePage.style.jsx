import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    padding: 20px 16px;
    gap: 20px;
  }
`;

export const BonusContainer = styled.h2`
  display: flex;
  gap: 3px;
  max-width: 500px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;

  @media (max-width: 798px) {
    flex-direction: column;
    align-items: center;

    span {
      text-align: center;
    }
  }
`;

export const BonusValue = styled.span`
  font-weight: 900;
  font-size: 76px;
  line-height: 100%;
`;

export const Caption = styled.p`
  max-width: 556px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.5px;

  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin: 0 auto;

  @media (max-width: 798px) {
    font-size: 14px;
  }
`;
