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
  color: ${(props) => props.theme.colors.text};
`;

export const QuestionBlock = styled.div``;
