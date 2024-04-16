import { Container, Page, Title } from "../LoginPage/LoginPage.style";
import { Formik } from "formik";
import { Form } from "./ResetPage.style";
import PasswordInput from "../../../components/Inputs/PasswordInput/PasswordInput";
import ButtonWide from "../../../components/Buttons/ButtonWide/ButtonWide";
import { useTranslation } from "react-i18next";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 2) {
    errors.password = "Too short password";
  }

  if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Passwords doesn't match";
  }

  return errors;
};

function ResetPage() {
  const { t } = useTranslation();

  return (
    <Page>
      <Container>
        <Title>{t("Reset.Title")}</Title>
        <Formik
          initialValues={{
            password: "",
            passwordConfirm: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            // login({ email: "test@example.com", password: "testPassword" });
          }}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(formik) => {
            const { errors } = formik;

            return (
              <Form>
                <PasswordInput
                  type={"password"}
                  name={"password"}
                  placeholder={"•••"}
                  title={t("Login.Password")}
                  iserror={errors.password ? 1 : 0}
                />
                <PasswordInput
                  type={"password"}
                  name={"passwordConfirm"}
                  placeholder={"•••"}
                  title={t("Register.ConfirmPass")}
                  iserror={errors.passwordConfirm ? 1 : 0}
                />

                <ButtonWide type="submit">{t("Confirm")}</ButtonWide>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Page>
  );
}

export default ResetPage;
