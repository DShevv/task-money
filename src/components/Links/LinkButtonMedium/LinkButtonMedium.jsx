import { Container, StyledMedium } from "./LinkButtonMedium.style";

function LinkButtonMedium({ to, children }) {
  return (
    <Container to={to}>
      <StyledMedium>{children}</StyledMedium>
    </Container>
  );
}

export default LinkButtonMedium;
