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
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";

const ForgotPage = observer(() => {
  const { isAuthorized } = authStore;
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/");
    }
  }, [isAuthorized, navigate]);

  return (
    <Page>
      <Container>
        <div>
          <Title>{t("Forgot.Title")}</Title>
          <SubTitle>{t("Forgot.SubTitle")}</SubTitle>
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
              placeholder={t("Forgot.EmailPlaceholder")}
              title={t("Login.Email")}
            />

            <ButtonWide type="submit">{t("Forgot.Send")}</ButtonWide>
          </StyledForm>
        </Formik>
      </Container>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Page>
  );
});

export default ForgotPage;
