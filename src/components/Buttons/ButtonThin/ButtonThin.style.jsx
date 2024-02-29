import styled from "styled-components";
import { StyledButton } from "../Button/Button.style";

export const StyledThin = styled(StyledButton)`
  padding: 12px 40px;
  border-width: 2px;

  @media (max-width: 600px) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;
