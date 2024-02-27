import { StyledWide } from "./ButtonWide.style";

function ButtonWide({ type, onClick, children }) {
  return (
    <StyledWide type={type} onClick={onClick}>
      {children}
    </StyledWide>
  );
}

export default ButtonWide;
