import { Container, Input, Title } from "./PasswordInput.style";

function PasswordInput({ iserror, type, title, name, placeholder }) {
  return (
    <Container>
      <Title iserror={iserror}>{title}</Title>
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

export default PasswordInput;
