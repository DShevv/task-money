import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <Container $iserror={iserror}>
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
      <Balance>
        {t("Balance")}: {balance}
      </Balance>
    </Container>
  );
}

export default TextInputBalance;
