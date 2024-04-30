import styled from "styled-components";
import { Container } from "../TaskPage/TaskPage.style";
import { TaskInfo } from "../SingleTask/SingleTask.style";

export const StyledContainer = styled(Container)``;

export const TopupInfo = styled(TaskInfo)`
  @media (max-width: 1024px) {
    padding: 28px 16px;
    max-width: calc(100% + 32px);
  }
`;

export const TopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const TopupTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const HeaderItem = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.text};

  &:last-of-type {
    text-align: right;
    @media (max-width: 600px) {
      text-align: left;
    }
  }
  & div:first-of-type {
    margin-bottom: 10px;
  }
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 600px) {
    font-size: 16px;
    align-items: start;
    flex-direction: column-reverse;
    gap: 12px;
  }
`;
