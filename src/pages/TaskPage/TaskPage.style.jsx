import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
  max-width: 1280px;

  @media (max-width: 1024px) {
    padding: 20px 16px 0px 16px;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SelectsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;
  }
`;
