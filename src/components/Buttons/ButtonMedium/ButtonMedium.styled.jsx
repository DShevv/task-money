import styled from "styled-components";
import { StyledButton } from "../Button/Button.style";

export const StyledMedium = styled(StyledButton)`
  padding: 14px 0;
  width: 166px;
  max-height: 48px;
  border-width: 2px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
