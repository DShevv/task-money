import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  height: 100vh;
  width: 256px;
  padding: 16px 16px 60px 16px;

  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px -6px 23px -6px rgba(0, 0, 0, 0.507);
  z-index: 1;

  @media (max-width: 1024px) {
    width: 100%;
    height: 68px;
    bottom: 0;
    padding: 8px 0px;
    border-radius: 20px;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  margin-top: 24px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 2px;
    justify-content: space-evenly;
  }
`;
