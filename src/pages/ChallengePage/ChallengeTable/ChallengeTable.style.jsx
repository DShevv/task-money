import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
`;

export const Item = styled.li`
  border-radius: 10px;
  width: 363px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px;

  @media (max-width: 798px) {
    gap: 18px;
    width: 100%;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ItemRevenue = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.primary};
`;

export const ItemTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.text};
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  padding-bottom: 1px;
  background-color: ${(props) => props.theme.colors.primaryAlpha};

  &::after {
    position: absolute;
    content: "";
    width: ${(props) => `${props.level}%`};
    height: 2px;
    top: 0;
    left: 0;
    opacity: 0.8;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Progress = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 798px) {
    font-size: 14px;
  }

  &.active {
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: ${(props) => props.theme.colors.primary};

    @media (max-width: 798px) {
      font-size: 16px;
    }
  }
`;
