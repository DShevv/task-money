import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  &.mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    &.mobile {
      display: flex;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
