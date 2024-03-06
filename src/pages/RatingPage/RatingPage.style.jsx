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

export const RatingSection = styled.div`
  display: flex;
  gap: 74px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const Caption = styled.div`
  max-width: 370px;
  flex: 0 0 370px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    flex: unset;
  }
`;

export const Title = styled.h2`
  margin-bottom: 25px;
  font-weight: 800;
  font-size: 72px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 1024px) {
    font-size: 48px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const Text = styled.div`
  margin-top: 25px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 14px;
  }
`;

export const SubTitle = styled.h3`
  max-width: 220px;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 1024px) {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    max-width: 181px;
    margin: 0 auto;
  }
`;

export const TopContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1 1 auto;
  list-style: none;

  &.middle {
    padding-bottom: 20px;
  }

  @media (max-width: 1024px) {
    max-width: 673px;
  }

  @media (max-width: 798px) {
    gap: 0;
    flex-direction: column;
    width: 100%;
  }
`;

export const TopItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 211px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 798px) {
    position: relative;
    width: calc(100% + 32px);
    left: -16px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0;
    flex-direction: row;
    justify-content: center;
    gap: 11px;
  }
`;

export const Image = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;

  @media (max-width: 798px) {
    flex: 0 0 36px;
    width: 36px;
    height: 36px;
  }
`;

export const ItemRank = styled.p`
  margin-top: 7px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color ${(props) => props.theme.colors.text};

  @media (max-width: 798px) {
    display: none;
  }
`;

export const Username = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color ${(props) => props.theme.colors.text};

  @media (max-width: 798px) {
    margin-top: 0;
    flex: 1 1 auto;
  }
`;

export const Score = styled.p`
  margin-top: 17px;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  color ${(props) => props.theme.colors.text};
  
  @media (max-width: 798px) {
    text-align: right;
    font-weight: 400;
    flex: 0 0 50px;
    margin-top: 0;
  }
`;

export const Rank = styled.div`
  display: none;
  color ${(props) => props.theme.colors.text};


  @media (max-width: 798px) {
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    flex: 0 0 34px;
  }
`;
