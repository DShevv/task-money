import { StyledLink } from "./TextLink.style";

function TextLink({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

export default TextLink;
