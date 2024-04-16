import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import {
  Buttons,
  CloseButton,
  Container,
  FormContainer,
  ImageReq,
  NotiCaption,
  NotiContainer,
  NotiSuccess,
  PasswordContainer,
  Photo,
  PhotoBox,
  PhotoButtons,
  PhotoContainer,
  PhotoControls,
  PhotoRemove,
  PhotoTitle,
  ReqItems,
  ReqTitle,
  StyledForm,
} from "./SettingsPage.style";
import placeholderImage from "../../assets/placeholders/gray.png";
import FileInputSharp from "../../components/Inputs/FileInputSharp/FileInputSharp";
import { useEffect, useState } from "react";
import getFileSize from "../../utils/getFileSize";
import { Form, Formik } from "formik";
import TextInput from "../../components/Inputs/TextInput/TextInput";
import PasswordInput from "../../components/Inputs/PasswordInput/PasswordInput";
import ButtonThin from "../../components/Buttons/ButtonThin/ButtonThin";
import ButtonBordered from "../../components/Buttons/ButtonBordered/ButtonBordered";
import { observer } from "mobx-react-lite";
import authStore from "../../stores/auth-store";
import validateSettings from "../../utils/validateSettings";
import { SvgCross } from "../../assets/icons/svgs";
import userStore from "../../stores/user-store";
import { useTranslation } from "react-i18next";

const SettingsPage = observer(() => {
  const { t } = useTranslation();
  const { logout } = authStore;
  const { getInfo, changePhoto, removePhoto, user } = userStore;
  const [photo, setPhoto] = useState();
  const [errors, setErrors] = useState({
    image: false,
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getInfo();
  }, []);

  const fileHandler = (file) => {
    if (getFileSize(file) < 4) {
      file.src = window.URL.createObjectURL(file);
      setPhoto(file);
      setErrors({ ...errors, image: false });
      changePhoto(file);
    } else {
      setErrors({ ...errors, image: true });
    }
  };

  const removeHandler = () => {
    setPhoto(undefined);
    setErrors({ ...errors, image: false });
    removePhoto();
  };

  const validateImage = (e) => {
    if (e.target.naturalWidth < 400 || e.target.naturalHeight < 400) {
      setErrors({ ...errors, image: true });
      setPhoto(undefined);
    }
  };

  return (
    <Container>
      <H1 className={"desktop"}>{t("Settings")}</H1>
      <MobileHeader title={t("Settings")} />
      <PhotoContainer>
        <PhotoTitle>{t("ProfilePhoto")}</PhotoTitle>
        <PhotoBox>
          <PhotoControls>
            <Photo
              src={user.photo ? user.photo : placeholderImage}
              onLoad={validateImage}
            />
            <PhotoButtons>
              <FileInputSharp
                accept={"image/*"}
                placeholder={"Upload Photo"}
                onChange={fileHandler}
              />
              <PhotoRemove onClick={removeHandler}>
                {t("Remove").toLowerCase()}
              </PhotoRemove>
            </PhotoButtons>
          </PhotoControls>

          <ImageReq $iserror={errors.image ? 1 : 0}>
            <ReqTitle>{t("ImageReq")}:</ReqTitle>
            <ul style={{ listStyle: "none" }}>
              <ReqItems>1. Min. 400 x 400px</ReqItems>
              <ReqItems>2. Max. 2MB</ReqItems>
              <ReqItems>3. {t("YourFace")}</ReqItems>
            </ul>
          </ImageReq>
        </PhotoBox>
      </PhotoContainer>
      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          password: "",
          newPassword: "",
          passwordConfirm: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          if (errors.image) {
            return console.log("error: image");
          }
          setSuccess(true);
        }}
        validate={validateSettings}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formik) => {
          const { errors } = formik;

          return (
            <StyledForm>
              <PhotoTitle style={{ marginBottom: "16px" }}>
                {t("UserDetails")}
              </PhotoTitle>
              <Form>
                <FormContainer>
                  <TextInput
                    type={"text"}
                    name={"name"}
                    placeholder={t("NewName")}
                    title={t("Register.Name")}
                    iserror={errors.name ? 1 : 0}
                  />
                  <TextInput
                    type={"email"}
                    name={"email"}
                    placeholder={"newmail@example.com"}
                    title={t("Mail")}
                    iserror={errors.email ? 1 : 0}
                  />
                  <PasswordContainer>
                    <PasswordInput
                      type={"password"}
                      name={"password"}
                      placeholder={t("OldPass")}
                      title={t("Login.Password")}
                      iserror={errors.password ? 1 : 0}
                    />{" "}
                    <PasswordInput
                      type={"password"}
                      name={"newPassword"}
                      placeholder={t("NewPassword")}
                      iserror={errors.newPassword ? 1 : 0}
                    />
                    <PasswordInput
                      type={"password"}
                      name={"passwordConfirm"}
                      placeholder={t("ConfirmNewPassword")}
                      iserror={errors.passwordConfirm ? 1 : 0}
                    />
                  </PasswordContainer>
                </FormContainer>
                <Buttons>
                  <ButtonThin type="submit">{t("Save")}</ButtonThin>
                  <ButtonBordered className={"desktop"} onClick={logout}>
                    {t("LogOut")}
                  </ButtonBordered>
                </Buttons>
              </Form>
            </StyledForm>
          );
        }}
      </Formik>
      {success && (
        <NotiContainer>
          <NotiSuccess />
          <NotiCaption>
            <span>{t("SuccSave")}.</span>
            {t("SettSave")}.
          </NotiCaption>
          <CloseButton
            onClick={() => {
              setSuccess(false);
            }}
          >
            {<SvgCross />}
          </CloseButton>
        </NotiContainer>
      )}
      <ButtonBordered className={"mobile"} onClick={logout}>
        {t("LogOut")}
      </ButtonBordered>
    </Container>
  );
});

export default SettingsPage;
