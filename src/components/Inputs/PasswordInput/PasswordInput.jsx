import { useState } from "react";
import { Container, Input, Title, Eye } from "./PasswordInput.style";

function PasswordInput({ iserror, type, title, name, placeholder }) {
  const [isActive, setIstActive] = useState(false);

  const toggleActive = () => {
    setIstActive(!isActive);
  };

  return (
    <Container>
      <Title iserror={iserror}>{title}</Title>
      <Input
        iserror={iserror}
        name={name}
        id={name}
        type={isActive ? "text" : type}
        placeholder={isActive ? "123" : placeholder}
      />
      <Eye isactive={isActive ? 1 : 0} onClick={toggleActive}>
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5.99996C18 4.18996 14.24 2.01496 9.993 1.99996C5.775 1.98496 2 4.17796 2 5.99996C2 7.82496 5.754 10.006 9.997 9.99996C14.252 9.99396 18 7.81996 18 5.99996ZM10 12C4.958 12.007 0 9.31396 0 5.99996C0 2.68596 4.984 -0.0170423 10 -4.23183e-05C15.016 0.0169577 20 2.68596 20 5.99996C20 9.31396 15.042 11.993 10 12ZM10 9.99996C8.93913 9.99996 7.92172 9.57853 7.17157 8.82839C6.42143 8.07824 6 7.06082 6 5.99996C6 4.93909 6.42143 3.92168 7.17157 3.17153C7.92172 2.42139 8.93913 1.99996 10 1.99996C11.0609 1.99996 12.0783 2.42139 12.8284 3.17153C13.5786 3.92168 14 4.93909 14 5.99996C14 7.06082 13.5786 8.07824 12.8284 8.82839C12.0783 9.57853 11.0609 9.99996 10 9.99996ZM10 7.99996C10.5304 7.99996 11.0391 7.78924 11.4142 7.41417C11.7893 7.0391 12 6.53039 12 5.99996C12 5.46952 11.7893 4.96082 11.4142 4.58574C11.0391 4.21067 10.5304 3.99996 10 3.99996C9.46957 3.99996 8.96086 4.21067 8.58579 4.58574C8.21071 4.96082 8 5.46952 8 5.99996C8 6.53039 8.21071 7.0391 8.58579 7.41417C8.96086 7.78924 9.46957 7.99996 10 7.99996Z"
            fill="currentColor"
          />
        </svg>
      </Eye>
    </Container>
  );
}

export default PasswordInput;
