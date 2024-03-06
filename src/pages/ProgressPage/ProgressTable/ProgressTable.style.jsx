import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;

  @media (max-width: 1070px) {
    justify-content: center;
  }

  @media (max-width: 798px) {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 400;

  @media (max-width: 798px) {
    font-size: 16px;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  padding-bottom: 1px;

  &::after {
    position: absolute;
    content: "";
    width: ${(props) => `${props.level}%`};
    height: 2px;
    top: 0;
    left: 0;
    opacity: 0.8;
  }
`;

export const Process = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  @media (max-width: 798px) {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const Item = styled.li`
  padding: 28px 25px 20px 20px;
  width: 363px;
  border-radius: 10px;
  line-height: 100%;
  color: ${(props) =>
    props.completed ? props.theme.colors.textDark : props.theme.colors.text};
  background-color: ${(props) =>
    props.completed
      ? props.theme.colors.primary
      : props.theme.colors.secondary};

  & ${ProgressBar} {
    background-color: ${(props) =>
      props.completed
        ? props.theme.colors.textDark
        : props.theme.colors.primaryAlpha};
  }

  & ${ProgressBar}::after {
    background-color: ${(props) =>
      props.completed
        ? props.theme.colors.textDark
        : props.theme.colors.primary};
  }

  @media (max-width: 798px) {
    padding: 28px 18px;
    width: 100%;
  }
`;
