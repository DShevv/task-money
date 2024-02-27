import { observer } from "mobx-react-lite";
import authStore from "../../../stores/auth-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Page,
  StyledForm,
  SubTitle,
  Title,
} from "../LoginPage/LoginPage.style";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import ButtonWide from "../../../components/Buttons/ButtonWide/ButtonWide";
import { Formik } from "formik";

const ForgotPage = observer(() => {
  const { isAuthorized } = authStore;
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
          <Title>Forgotten your password?</Title>
          <SubTitle>
            There is nothing to worry about, we&apos;ll send you a message to
            help you reset your password.
          </SubTitle>
        </div>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            // login({ email: "test@example.com", password: "testPassword" });
          }}
        >
          <StyledForm>
            <TextInput
              type={"email"}
              name={"email"}
              placeholder={"Enter personal or work email address"}
              title={"Email Address"}
            />

            <ButtonWide type="submit">Send Reset Link</ButtonWide>
          </StyledForm>
        </Formik>
      </Container>
    </Page>
  );
});

export default ForgotPage;
