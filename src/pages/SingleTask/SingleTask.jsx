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

function SingleTask() {
  return (
    <Container style={{ gap: "10px" }}>
      <H1 className={"desktop"}>Tasks</H1>
      <MobileHeader title={"Tasks"} />

      <BackLink to="/tasks">
        <SvgBackArrow />
        <span>Back to tasks</span>
      </BackLink>
      <TaskInfo>
        <TaskHeader>
          <TaskImage src={placeholderImg} />
          <TaskTitle>Subscribe to the channel</TaskTitle>
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
          <FileInput accept={"image/*"} placeholder={"Attach file"} />
          <ButtonThin onClick={() => {}}>Complete</ButtonThin>
        </TaskButtons>
      </TaskInfo>
    </Container>
  );
}

export default SingleTask;
