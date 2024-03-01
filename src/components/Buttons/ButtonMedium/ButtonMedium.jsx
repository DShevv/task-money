import { StyledMedium } from "./ButtonMedium.styled";

function ButtonMedium({ onClick, children }) {
  return <StyledMedium onClick={onClick}>{children}</StyledMedium>;
}

export default ButtonMedium;
