import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import { BackLink } from "../SingleTask/SingleTask.style";
import {
  InputsContainer,
  StyledContainer,
  TopupHeader,
  TopupInfo,
  TopupTitle,
} from "./WithdrawPage.style";
import { SvgBackArrow } from "../../assets/icons/svgs";
import SelectBorderedPrimary from "../../components/Selects/SelectBorderedPrimary/SelectBorderedPrimary";
import TextInputMedium from "../../components/Inputs/TextInputMedium/TextInputMedium";
import { useState } from "react";
import ButtonMedium from "../../components/Buttons/ButtonMedium/ButtonMedium";
import TextInputBalance from "../../components/Inputs/TextInputBalance/TextInputBalance";
import { useTranslation } from "react-i18next";

function WithdrawPage() {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    method: undefined,
    amount: "",
    requisites: "",
  });
  const [errors, setError] = useState({ method: 0, amount: 0, requisites: "" });

  const methodHandler = (value) => {
    setValues({ ...values, method: value });
  };

  const amountHandler = (value) => {
    setValues({ ...values, amount: value });
  };

  const requisitesHandler = (value) => {
    setValues({ ...values, requisites: value });
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
    setError({
      method: validate("method"),
      amount: validate("amount"),
      requisites: validate("requisites"),
    });
    console.log(values);
  };

  return (
    <StyledContainer>
      <H1 className="desktop">{t("Withdraw")}</H1>
      <MobileHeader title={t("Withdraw")} />
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
            items={["USD", "USDT", "RUB"]}
            style={{ width: "180px" }}
            value={values.method ? values.method : "Currency"}
            onChange={methodHandler}
            $iserror={errors.method}
          />
        </TopupHeader>
        <InputsContainer>
          <TextInputMedium
            type={"text"}
            name={"requisites"}
            placeholder={t("Requisites")}
            value={values.requisites}
            iserror={errors.requisites}
            onChange={requisitesHandler}
          />
          <TextInputBalance
            type={"number"}
            name={"amount"}
            placeholder={t("withAmount")}
            value={values.amount}
            iserror={errors.amount}
            onChange={amountHandler}
            balance={"1000 USD"}
          />
        </InputsContainer>
        <ButtonMedium onClick={onSubmit}>{t("Continue")}</ButtonMedium>
      </TopupInfo>
    </StyledContainer>
  );
}

export default WithdrawPage;
