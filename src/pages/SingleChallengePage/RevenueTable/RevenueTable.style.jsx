import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 20px;
  max-width: 1280px;

  li {
    width: 100%;
  }

  @media (max-width: 1024px) {
    position: relative;
    width: calc(100% + 32px);
    left: -16px;
  }
`;

export const Item = styled.div`
  width: 100%;
  padding: 19px 26px 18px 26px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 26px;
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  background-color: ${(props) => props.theme.colors.secondary};

  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;

  & div {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    padding: 15px 16px 14px 16px;
    font-size: 12px;
  }

  @media (max-width: 670px) {
    gap: 10px;
  }

  @media (max-width: 485px) {
    gap: 6px;
  }
`;
