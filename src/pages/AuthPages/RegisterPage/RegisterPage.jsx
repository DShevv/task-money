import { Container, Page, Title } from "../LoginPage/LoginPage.style";
import { Formik } from "formik";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import Checkbox from "../../../components/Inputs/Checkbox/Checkbox";
import { Form } from "./RegisterPage.style";
import PasswordInput from "../../../components/Inputs/PasswordInput/PasswordInput";
import ButtonWide from "../../../components/Buttons/ButtonWide/ButtonWide";
import Divider from "../../../components/Divider/Divider";
import TextLink from "../../../components/Links/TextLink/TextLink";

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

function RegisterPage() {
  return (
    <Page>
      <Container>
        <Title>Sing Up</Title>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            invite: "",
            privacy: false,
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
                <TextInput
                  type={"text"}
                  name={"name"}
                  placeholder={"John"}
                  title={"Name"}
                  iserror={errors.name ? 1 : 0}
                />
                <TextInput
                  type={"email"}
                  name={"email"}
                  placeholder={"example@example.com"}
                  title={"Email Address"}
                  iserror={errors.email ? 1 : 0}
                />
                <PasswordInput
                  type={"password"}
                  name={"password"}
                  placeholder={"•••"}
                  title={"Password"}
                  iserror={errors.password ? 1 : 0}
                />
                <PasswordInput
                  type={"password"}
                  name={"passwordConfirm"}
                  placeholder={"•••"}
                  title={"Confirm Password"}
                  iserror={errors.passwordConfirm ? 1 : 0}
                />
                <TextInput
                  type={"text"}
                  name={"invite"}
                  placeholder={"1234"}
                  title={"Invite Code"}
                />
                <Checkbox
                  title={"Accept privacy policy"}
                  name={"privacy"}
                  required={true}
                />
                <ButtonWide type="submit">Register</ButtonWide>
              </Form>
            );
          }}
        </Formik>
        <Divider />
        <TextLink to="/login">Already have an account?</TextLink>
      </Container>
    </Page>
  );
}

export default RegisterPage;
