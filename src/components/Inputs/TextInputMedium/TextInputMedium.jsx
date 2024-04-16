import { Container, Input, Title } from "./TextInputMedium.style";

function TextInputMedium({
  iserror,
  type,
  title,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <Container>
      {title && <Title $iserror={iserror}>{title}</Title>}
      <Input
        $iserror={iserror}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </Container>
  );
}

export default TextInputMedium;
