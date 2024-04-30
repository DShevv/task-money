import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import { BackLink, TaskButtons } from "../SingleTask/SingleTask.style";
import {
  StyledContainer,
  TopupHeader,
  TopupInfo,
  TopupTitle,
  HeaderItem,
  FileContainer,
} from "./TopupPage.style";
import { SvgBackArrow } from "../../assets/icons/svgs";
import SelectBorderedPrimary from "../../components/Selects/SelectBorderedPrimary/SelectBorderedPrimary";
import TextInputMedium from "../../components/Inputs/TextInputMedium/TextInputMedium";
import { useState } from "react";
import ButtonMedium from "../../components/Buttons/ButtonMedium/ButtonMedium";
import { useTranslation } from "react-i18next";
import FileInput from "../../components/Inputs/FileInput/FileInput";
import ButtonThin from "../../components/Buttons/ButtonThin/ButtonThin";
import {
  TopupInfo as SecondInfo,
  TopupHeader as SecondHeader,
} from "../SingleTopupPage/SingleTopupPage.style";

function TopupPage() {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    method: undefined,
    amount: "",
  });
  const [errors, setError] = useState({ method: 0, amount: 0 });
  const [step, setStep] = useState(false);
  const [file, setFile] = useState(undefined);

  const methodHandler = (value) => {
    setValues({ ...values, method: value });
  };

  const amountHandler = (value) => {
    setValues({ ...values, amount: value });
  };

  const validate = (field) => {
    if (
      values[field] === undefined ||
      values[field] === "" ||
      values[field] < 1 ||
      values[field] === "Method"
    ) {
      return 1;
    }
    return 0;
  };

  const onSubmit = () => {
    const methodRes = validate("method");
    const amountRes = validate("amount");
    setError({ method: methodRes, amount: amountRes });

    if (methodRes === 0 && amountRes === 0) {
      setStep(true);
    }
    console.log(values);
  };

  return (
    <StyledContainer>
      <H1 className="desktop">{t("Topup")}</H1>
      <MobileHeader title={t("Topup")} />
      <BackLink to={"/wallet"}>
        <SvgBackArrow />
        <span>
          {t("BackTo")} {t("Wallet").toLowerCase()}
        </span>
      </BackLink>
      {!step ? (
        <TopupInfo>
          <TopupHeader>
            <TopupTitle>{t("ChosePayment")}</TopupTitle>
            <SelectBorderedPrimary
              items={["Paypal", "USDT", "Visa"]}
              value={values.method ? values.method : "Method"}
              onChange={methodHandler}
              $iserror={errors.method}
            />
          </TopupHeader>
          <TextInputMedium
            type={"number"}
            name={"amount"}
            placeholder={t("topAmount")}
            value={values.amount}
            iserror={errors.amount}
            onChange={amountHandler}
          />
          <ButtonMedium onClick={onSubmit}>{t("Continue")}</ButtonMedium>
        </TopupInfo>
      ) : (
        <SecondInfo>
          <SecondHeader>
            <HeaderItem>
              <div>{t("PaymentDetails")}:</div>
              <div>123456789012345678234567</div>
            </HeaderItem>
            <HeaderItem>
              <div>{t("AmountToBePaid")}:</div>
              <div>100 USD</div>
            </HeaderItem>
          </SecondHeader>
          <TaskButtons>
            <FileContainer>
              <FileInput
                accept={"image/*"}
                placeholder={t("Attach")}
                onChange={(value) => setFile(value)}
              />
              <span>{file ? file.name : t("PaymentReceipt")}</span>
            </FileContainer>
            <ButtonThin onClick={() => {}}>{t("Send")}</ButtonThin>
          </TaskButtons>
        </SecondInfo>
      )}
    </StyledContainer>
  );
}

export default TopupPage;
