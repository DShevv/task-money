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

function TopupPage() {
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
      values[field] === "Method"
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
      <H1 className="desktop">Top up</H1>
      <MobileHeader title={"Top up"} />
      <BackLink to={"/wallet"}>
        <SvgBackArrow />
        <span>Back to wallet</span>
      </BackLink>
      <TopupInfo>
        <TopupHeader>
          <TopupTitle>Chose your payment method</TopupTitle>
          <SelectBorderedPrimary
            items={["Paypal", "USDT", "Visa"]}
            label={"Method"}
            value={values.method}
            onChange={methodHandler}
            iserror={errors.method}
          />
        </TopupHeader>
        <TextInputMedium
          type={"number"}
          name={"amount"}
          placeholder={"Top up amount"}
          value={values.amount}
          iserror={errors.amount}
          onChange={amountHandler}
        />
        <ButtonMedium onClick={onSubmit}>Continue</ButtonMedium>
      </TopupInfo>
    </StyledContainer>
  );
}

export default TopupPage;
