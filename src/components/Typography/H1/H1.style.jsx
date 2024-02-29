import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 100%;
  color: ${(props) => props.theme.colors.text};

  &.mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    font-weight: 600;
    font-size: 48px;
    line-height: 110%;

    &.mobile {
      display: block;
    }

    &.desktop {
      display: none;
    }
  }
`;
