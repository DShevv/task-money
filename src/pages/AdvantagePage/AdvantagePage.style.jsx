import styled from "styled-components";

export const HistoryHeader = styled.div`
  margin-top: 8px;
  width: 100%;
  padding: 19px 26px 0px 26px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr 1fr;
  gap: 26px;

  @media (max-width: 1024px) {
    margin-top: 14px;
    padding: 19px 0px 0px 0px;
  }

  @media (max-width: 670px) {
    gap: 10px;
  }

  @media (max-width: 485px) {
    gap: 6px;
  }
`;

export const HistoryTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
    font-size: 14px;
  }

  @media (max-width: 670px) {
    font-size: 12px;
  }

  @media (max-width: 485px) {
    font-size: 10px;
  }
`;

export const HistoryFilters = styled.div`
  display: flex;
  gap: 0;

  @media (max-width: 1024px) {
    &.desktop {
      display: none;
    }
  }
`;

export const TextUnit = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;
