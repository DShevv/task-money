import { StyledThin } from "./ButtonThin.style";

function ButtonThin({ onClick, children, ...other }) {
  return (
    <StyledThin onClick={onClick} {...other}>
      {children}
    </StyledThin>
  );
}

export default ButtonThin;
