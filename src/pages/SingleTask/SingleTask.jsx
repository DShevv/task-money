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
import { useEffect, useState } from "react";
import { FileContainer } from "../SingleTopupPage/SingleTopupPage.style";
import { useTranslation } from "react-i18next";
import TaskService from "../../services/TaskService";

function SingleTask() {
  const { t } = useTranslation();
  const [file, setFile] = useState(undefined);
  const [task, setTask] = useState();

  const fetchTasks = async () => {
    const res = await TaskService.getTask(1);
    setTask(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    task && (
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
            <TaskTitle>{`${t("SubscribeTo")} ${task.network}`}</TaskTitle>
            <TaskIncome>+{task.price} usd</TaskIncome>
          </TaskHeader>
          <TaskText>{task.desc}</TaskText>
          <TaskLink href={task.link} target="_blank">
            {task.link}
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
    )
  );
}

export default SingleTask;
