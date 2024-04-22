import { Container, Page, Title } from "../LoginPage/LoginPage.style";
import { Formik } from "formik";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import Checkbox from "../../../components/Inputs/Checkbox/Checkbox";
import { Form } from "./RegisterPage.style";
import PasswordInput from "../../../components/Inputs/PasswordInput/PasswordInput";
import ButtonWide from "../../../components/Buttons/ButtonWide/ButtonWide";
import Divider from "../../../components/Divider/Divider";
import TextLink from "../../../components/Links/TextLink/TextLink";
import { observer } from "mobx-react-lite";
import authStore from "../../../stores/auth-store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Too short name";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 2) {
    errors.password = "Too short password";
  }

  if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Passwords doesn't match";
  }

  if (!values.privacy) {
    errors.privacy = "Required";
  }

  return errors;
};

export const RegisterPage = observer(() => {
  const { register } = authStore;
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Page>
      <Container>
        <Title>{t("Register.Title")}</Title>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            invite: "",
            privacy: false,
          }}
          onSubmit={async (values) => {
            console.log(values.name);
            const res = await register({
              name: values.name,
              email: values.email,
              password: values.password,
              invite_code: values.invite,
            });
            console.log(res);
            if (res === 200) {
              navigate("/login");
            }
          }}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(formik) => {
            const { errors } = formik;

            return (
              <Form>
                <TextInput
                  type={"text"}
                  name={"name"}
                  placeholder={"John"}
                  title={t("Register.Name")}
                  iserror={errors.name ? 1 : 0}
                />
                <TextInput
                  type={"email"}
                  name={"email"}
                  placeholder={"example@example.com"}
                  title={t("Login.Email")}
                  iserror={errors.email ? 1 : 0}
                />
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
                <TextInput
                  type={"text"}
                  name={"invite"}
                  placeholder={"1234"}
                  title={t("Register.Invite")}
                />
                <Checkbox
                  title={t("Register.Policy")}
                  name={"privacy"}
                  required={true}
                />
                <ButtonWide type="submit">{t("Register.Register")}</ButtonWide>
              </Form>
            );
          }}
        </Formik>
        <Divider />
        <TextLink to="/login">{t("Register.Have")}</TextLink>
      </Container>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Page>
  );
});
