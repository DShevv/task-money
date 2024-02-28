import { observer } from "mobx-react-lite";
import authStore from "../../../stores/auth-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Line,
  Page,
  StyledForm,
  SubTitle,
  Title,
} from "./LoginPage.style";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import Checkbox from "../../../components/Inputs/Checkbox/Checkbox";
import TextLink from "../../../components/Links/TextLink/TextLink";
import ButtonWide from "../../../components/Buttons/ButtonWide/ButtonWide";
import { Formik } from "formik";
import Divider from "../../../components/Divider/Divider";

const LoginPage = observer(() => {
  const { isAuthorized, login } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/");
    }
  }, [isAuthorized, navigate]);

  return (
    <Page>
      <Container>
        <div>
          <Title>Welcome Back</Title>
          <SubTitle>Please log in to continue</SubTitle>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
          }}
          onSubmit={(values) => {
            console.log(values);
            login({ email: "test@example.com", password: "testPassword" });
          }}
        >
          <StyledForm>
            <TextInput
              type={"email"}
              name={"email"}
              placeholder={"example@example.com"}
              title={"Email Address"}
            />
            <TextInput
              type={"password"}
              name={"password"}
              placeholder={"•••"}
              title={"Password"}
            />
            <Line>
              <Checkbox title={"Remember me"} name={"remember"} />
              <TextLink to="/forgot">Forgot Password?</TextLink>
            </Line>
            <ButtonWide type="submit">Log In</ButtonWide>
          </StyledForm>
        </Formik>
        <Divider />

        <TextLink to="/register">No account yet? Sign Up</TextLink>
      </Container>
    </Page>
  );
});

export default LoginPage;
