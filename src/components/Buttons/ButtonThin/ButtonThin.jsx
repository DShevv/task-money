import { StyledThin } from "./ButtonThin.style";

function ButtonThin({ onClick, children }) {
  return <StyledThin onClick={onClick}>{children}</StyledThin>;
}

export default ButtonThin;
