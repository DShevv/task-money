import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import { BackLink } from "../SingleTask/SingleTask.style";
import {
  StyledContainer,
  TopupHeader,
  TopupInfo,
  TopupTitle,
} from "./TopupPage.style";
import { SvgBackArrow } from "../../assets/icons/svgs";
import SelectBorderedPrimary from "../../components/Selects/SelectBorderedPrimary/SelectBorderedPrimary";
import TextInputMedium from "../../components/Inputs/TextInputMedium/TextInputMedium";
import { useState } from "react";
import ButtonMedium from "../../components/Buttons/ButtonMedium/ButtonMedium";
import { useTranslation } from "react-i18next";

function TopupPage() {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    method: undefined,
    amount: "",
  });
  const [errors, setError] = useState({ method: 0, amount: 0 });

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
      values[field] === t("Method")
    ) {
      return 1;
    }
    return 0;
  };

  const onSubmit = () => {
    setError({ method: validate("method"), amount: validate("amount") });
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
      <TopupInfo>
        <TopupHeader>
          <TopupTitle>{t("ChosePayment")}</TopupTitle>
          <SelectBorderedPrimary
            items={["Paypal", "USDT", "Visa"]}
            label={t("Method")}
            value={values.method}
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
    </StyledContainer>
  );
}

export default TopupPage;
