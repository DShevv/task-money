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
import toast from "react-hot-toast";
import Notification from "../../components/Notification/Notification";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";

export const SingleTask = observer(() => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [file, setFile] = useState(undefined);
  const [task, setTask] = useState();
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await TaskService.getTask(id);

    if (res.status !== 200) {
      toast.custom((toa) => (
        <Notification
          toa={toa}
          text={[res.response.data.detail]}
          status={res.response.status}
        />
      ));
    }
    setTask(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const takeTask = async () => {
    const res = await TaskService.takeTask(task.id);

    if (res.status !== 200) {
      toast.custom((toa) => (
        <Notification
          toa={toa}
          text={[res.response.data.detail]}
          status={res.response.status}
        />
      ));
      return;
    }
    setTask({ ...task, status: "In Progress" });
  };

  const submitTask = async () => {
    if (file) {
      const res = await TaskService.submitTask(task.id, file);

      if (res.status !== 200) {
        toast.custom((toa) => (
          <Notification
            toa={toa}
            text={[res.response.data.detail]}
            status={res.response.status}
          />
        ));
        return;
      }

      toast.custom((toa) => (
        <Notification
          toa={toa}
          text={["Задание отправлено на проверку"]}
          status={200}
        />
      ));
      navigate("/tasks");
      return;
    }

    toast.custom((toa) => (
      <Notification toa={toa} text={["Файл не выбран"]} status={404} />
    ));
  };

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

          {task.status !== "On Review" ? (
            task.status !== "In Progress" ? (
              <TaskButtons style={{ justifyContent: "flex-end" }}>
                <ButtonThin onClick={takeTask}>{t("Accept")}</ButtonThin>
              </TaskButtons>
            ) : (
              <TaskButtons>
                <FileContainer>
                  <FileInput
                    accept={"image/*"}
                    placeholder={t("Attach")}
                    onChange={(value) => setFile(value)}
                  />
                  <span>{file ? file.name : ""}</span>
                </FileContainer>
                <ButtonThin onClick={submitTask}>{t("Complete")}</ButtonThin>
              </TaskButtons>
            )
          ) : (
            ""
          )}
        </TaskInfo>
      </Container>
    )
  );
});
