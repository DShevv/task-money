import { styled } from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  margin: 0 auto;
  width: 680px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;

  @media (max-width: 700px) {
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    margin: 0;
    padding: 32px 16px;
    gap: 32px;
    border-radius: 0px;
  }
`;

export const Page = styled.div`
  padding: 200px 0;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.backgroundColor};

  @media (max-width: 700px) {
    padding: 0;
    background: ${(props) => props.theme.colors.secondary};
  }
`;

export const Title = styled.h1`
  margin-bottom: 8px;

  font-family: "SF Pro Display", sans-serif;
  font-size: 42px;
  font-weight: bold;
  line-height: 110%;
  text-align: center;

  color: ${(props) => props.theme.colors.text};
`;

export const SubTitle = styled.h4`
  margin-bottom: 8px;

  font-family: "SF Pro Display", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  text-align: center;

  color: ${(props) => props.theme.colors.text};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
