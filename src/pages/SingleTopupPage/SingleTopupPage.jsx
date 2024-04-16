import MobileHeader from "../../components/MobileHeader/MobileHeader";
import H1 from "../../components/Typography/H1/H1";
import { BackLink, TaskButtons } from "../SingleTask/SingleTask.style";
import {
  FileContainer,
  HeaderItem,
  StyledContainer,
  TopupHeader,
  TopupInfo,
} from "./SingleTopupPage.style";
import { SvgBackArrow } from "../../assets/icons/svgs";
import { useState } from "react";
import FileInput from "../../components/Inputs/FileInput/FileInput";
import ButtonThin from "../../components/Buttons/ButtonThin/ButtonThin";
import { useTranslation } from "react-i18next";

function SingleTopupPage() {
  const { t } = useTranslation();

  const [file, setFile] = useState(undefined);
  const [errors, setError] = useState({ method: 0, amount: 0 });

  const onSubmit = () => {
    console.log(file);
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
          <HeaderItem>
            <div>{t("PaymentDetails")}:</div>
            <div>123456789012345678234567</div>
          </HeaderItem>
          <HeaderItem>
            <div>{t("AmountToBePaid")}:</div>
            <div>100 USD</div>
          </HeaderItem>
        </TopupHeader>
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
      </TopupInfo>
    </StyledContainer>
  );
}

export default SingleTopupPage;
