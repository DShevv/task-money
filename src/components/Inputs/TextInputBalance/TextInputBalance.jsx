import { Container, Input, Balance } from "./TextInputBalance.style";

function TextInputBalance({
  iserror,
  type,
  name,
  value,
  placeholder,
  onChange,
  balance,
}) {
  return (
    <Container iserror={iserror}>
      <Input
        iserror={iserror}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <Balance>Balance: {balance}</Balance>
    </Container>
  );
}

export default TextInputBalance;
