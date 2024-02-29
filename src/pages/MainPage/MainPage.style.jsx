import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  background: ${(props) => props.theme.colors.backgroundColor};

  @media (max-width: 1024px) {
    padding-bottom: 78px;
  }
`;

export const Content = styled.section`
  margin-left: 256px;
  padding-left: 24px;
  padding-bottom: 24px;
  padding-right: 24px;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const HeaderBlock = styled.div`
  width: 220px;
  height: 63px;
  margin-bottom: 24px;

  background-color: ${(props) => props.theme.colors.grayEmpty};

  @media (max-width: 1024px) {
    display: none;
  }
`;
