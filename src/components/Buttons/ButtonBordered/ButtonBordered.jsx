import { StyledThin } from "./ButtonBordered.style";

function ButtonBordered({ onClick, children, ...other }) {
  return (
    <StyledThin onClick={onClick} {...other}>
      {children}
    </StyledThin>
  );
}

export default ButtonBordered;
