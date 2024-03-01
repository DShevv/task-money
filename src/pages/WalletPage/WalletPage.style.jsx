import styled from "styled-components";

export const Controls = styled.div`
  width: fit-content;
  margin-top: 24px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 8px;
  }
`;

export const Balance = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  gap: 22px;

  @media (max-width: 1024px) {
    font-size: 24px;
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    justify-content: space-between;
  }
`;

export const ControlsButtons = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 30px;

  @media (max-width: 600px) {
    margin-top: 25px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const HistoryHeader = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    margin-top: 14px;
  }
`;

export const HistoryTitle = styled.h3`
  font-weight: 500;
  font-size: 32px;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
    font-size: 24px;
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
