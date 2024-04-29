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

export const Question = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
  max-width: 1024px;

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
    font-size: 24px;
  }
`;

export const Answer = styled.p`
  margin-bottom: 12px;
  max-width: 1024px;
  font-size: 16px;
  text-align: justify;
  color: ${(props) => props.theme.colors.text};
`;

export const QuestionBlock = styled.div``;

export const StyledTable = styled.table`
  border-spacing: 10px;
  border-collapse: collapse;
  padding: 5px;

  @media (max-width: 665px) {
    font-size: 12px;
  }

  @media (max-width: 530px) {
    font-size: 10px;
  }

  @media (max-width: 460px) {
    font-size: 9px;

    td {
      padding: 2px;
    }
  }

  @media (max-width: 400px) {
    font-size: 8px;

    td {
      padding: 1px;
    }
  }
`;

export const TableHead = styled.thead`
  padding-bottom: 10px;

  td {
    color: ${(props) => props.theme.colors.primary};
    border: solid 1px ${(props) => props.theme.colors.primary};
    text-align: center;
  }
`;

export const TableBody = styled.tbody`
  &::before {
    content: "@";
    display: block;
    line-height: 10px;
    text-indent: -99999px;
  }

  td {
    color: ${(props) => props.theme.colors.text};
    border: solid 1px ${(props) => props.theme.colors.text};
    text-align: center;
  }
`;
