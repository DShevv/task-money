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
import userStore from "../../../stores/user-store";
import { useTranslation } from "react-i18next";

const LoginPage = observer(() => {
  const { isAuthorized, login } = authStore;
  const { getInfo } = userStore;
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuthorized) {
      getInfo();
      navigate("/tasks");
    }
  }, [isAuthorized, navigate]);

  return (
    <Page>
      <Container>
        <div>
          <Title>{t("Login.Welcome")}</Title>
          <SubTitle>{t("Login.LoginSubtitle")}</SubTitle>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
          }}
          onSubmit={(values) => {
            console.log(values);
            login({ email: values.email, password: values.password });
          }}
        >
          <StyledForm>
            <TextInput
              type={"email"}
              name={"email"}
              placeholder={"example@example.com"}
              title={t("Login.Email")}
            />
            <TextInput
              type={"password"}
              name={"password"}
              placeholder={"•••"}
              title={t("Login.Password")}
            />
            <Line>
              <Checkbox title={t("Login.Remember")} name={"remember"} />
              <TextLink to="/forgot">{t("Login.Forgot")}</TextLink>
            </Line>
            <ButtonWide type="submit">{t("Login.Login")}</ButtonWide>
          </StyledForm>
        </Formik>
        <Divider />

        <TextLink to="/register">{t("Login.NoAccount")}</TextLink>
      </Container>
    </Page>
  );
});

export default LoginPage;
