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

function SingleTopupPage() {
  const [file, setFile] = useState(undefined);
  const [errors, setError] = useState({ method: 0, amount: 0 });

  const onSubmit = () => {
    console.log(file);
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
          <HeaderItem>
            <div>Payment details:</div>
            <div>123456789012345678234567</div>
          </HeaderItem>
          <HeaderItem>
            <div>Amount to be paid:</div>
            <div>100 USD</div>
          </HeaderItem>
        </TopupHeader>
        <TaskButtons>
          <FileContainer>
            <FileInput
              accept={"image/*"}
              placeholder={"Attach file"}
              onChange={(value) => setFile(value)}
            />
            <span>{file ? file.name : "Attach the payment receipt"}</span>
          </FileContainer>
          <ButtonThin onClick={() => {}}>Send</ButtonThin>
        </TaskButtons>
      </TopupInfo>
    </StyledContainer>
  );
}

export default SingleTopupPage;
