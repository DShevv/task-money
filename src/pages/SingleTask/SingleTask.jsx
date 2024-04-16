import { SvgBackArrow } from "../../assets/icons/svgs";
import H1 from "../../components/Typography/H1/H1";
import { Container } from "../TaskPage/TaskPage.style";
import {
  BackLink,
  TaskButtons,
  TaskHeader,
  TaskImage,
  TaskIncome,
  TaskInfo,
  TaskLink,
  TaskText,
  TaskTitle,
} from "./SingleTask.style";
import placeholderImg from "../../assets/placeholders/white.png";
import FileInput from "../../components/Inputs/FileInput/FileInput";
import ButtonThin from "../../components/Buttons/ButtonThin/ButtonThin";
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import { useState } from "react";
import { FileContainer } from "../SingleTopupPage/SingleTopupPage.style";
import { useTranslation } from "react-i18next";

function SingleTask() {
  const { t } = useTranslation();
  const [file, setFile] = useState(undefined);

  return (
    <Container>
      <H1 className={"desktop"}>{t("Tasks")}</H1>
      <MobileHeader title={t("Tasks")} />

      <BackLink to="/tasks">
        <SvgBackArrow />
        <span>
          {t("BackTo")} {t("Tasks").toLowerCase()}
        </span>
      </BackLink>
      <TaskInfo>
        <TaskHeader>
          <TaskImage src={placeholderImg} />
          <TaskTitle>{t("SubscribeTo")}</TaskTitle>
          <TaskIncome>+5 usd</TaskIncome>
        </TaskHeader>
        <TaskText>
          Lorem ipsum dolor sit amet consectetur. Gravida turpis hac magna
          senectus. Pellentesque lorem blandit nam curabitur. Ipsum nascetur
          diam purus tincidunt sed eu diam massa risus.
        </TaskText>
        <TaskLink href="https://www.twitter.com/3214214" target="_blank">
          www.twitter.com/3214214
        </TaskLink>
        <TaskButtons>
          <FileContainer>
            <FileInput
              accept={"image/*"}
              placeholder={t("Attach")}
              onChange={(value) => setFile(value)}
            />
            <span>{file ? file.name : ""}</span>
          </FileContainer>
          <ButtonThin onClick={() => {}}>{t("Complete")}</ButtonThin>
        </TaskButtons>
      </TaskInfo>
    </Container>
  );
}

export default SingleTask;
