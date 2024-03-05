import { Container, Input, Title } from "./TextInput.style";

function TextInput({ iserror, type, title, name, placeholder }) {
  return (
    <Container>
      {title && <Title iserror={iserror}>{title}</Title>}
      <Input
        iserror={iserror}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
}

export default TextInput;
