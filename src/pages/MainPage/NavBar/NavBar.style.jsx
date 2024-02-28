import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  height: 100vh;
  width: 256px;
  padding: 16px 16px 60px 16px;

  background-color: ${(props) => props.theme.colors.secondary};
`;

export const LinksList = styled.ul`
  list-style: none;
  margin-top: 24px;
`;
