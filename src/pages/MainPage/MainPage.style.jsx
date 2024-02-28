import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  background: ${(props) => props.theme.colors.backgroundColor};
`;

export const Content = styled.section`
  margin-left: 256px;
  padding-left: 24px;
`;

export const HeaderBlock = styled.div`
  width: 220px;
  height: 63px;
  margin-bottom: 24px;

  background-color: ${(props) => props.theme.colors.grayEmpty};
`;
