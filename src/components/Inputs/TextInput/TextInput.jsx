import { Container, Input, Title } from "./TextInput.style";

function TextInput({ type, title, name, placeholder }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input name={name} id={name} type={type} placeholder={placeholder} />
    </Container>
  );
}

export default TextInput;
