import { Checkmark, Container, StyledCheckbox, Title } from "./Checkbox.style";

function Checkbox({ name, title }) {
  return (
    <Container>
      <StyledCheckbox type="checkbox" name={name} id={name} />
      <Checkmark>
        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.58632 5.56071L1.46499 3.43939L0.0507812 4.8536L3.58632 8.38914L9.95028 2.02518L8.53606 0.610962L3.58632 5.56071Z"
            fill="currentColor"
          />
        </svg>
      </Checkmark>
      <Title>{title}</Title>
    </Container>
  );
}

export default Checkbox;
