import { Container, Income, TaskImage, Title } from "./Task.style";

function Task({ to, image, title, text }) {
  return (
    <Container to={`tasks/${to}`}>
      <TaskImage src={image} alt={title} />
      <Title>{title}</Title>
      <Income>{text}</Income>
    </Container>
  );
}

export default Task;
