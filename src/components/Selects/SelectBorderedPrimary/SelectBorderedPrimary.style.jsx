import styled from "styled-components";

export const PopUp = styled.ul`
  position: absolute;
  list-style: none;
  width: calc(100% + 4px);
  padding: 12px 0;
  padding-top: 0;
  bottom: 0;
  left: -2px;
  transform: translateY(100%);
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: none;
  display: none;
  box-shadow: 0px 6px 23px -6px rgba(0, 0, 0, 0.507);
  flex-direction: column;
`;

export const StyledArrow = styled.div`
  width: 12px;
  height: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  border: 2px solid
    ${(props) =>
      props.iserror ? props.theme.colors.error : props.theme.colors.primary};
  border-radius: 8px;
  padding: 12px 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textGrayDark};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;

  &.active {
    border-bottom-color: transparent;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  &.active ${PopUp} {
    display: flex;
  }

  &.active ${StyledArrow} {
    transform: rotate(180deg);
  }

  &.mobile {
    display: none;
  }

  & ${PopUp} {
    border-color: ${(props) =>
      props.iserror ? props.theme.colors.error : props.theme.colors.primary};
  }

  @media (max-width: 1024px) {
    &.mobile {
      display: flex;
    }

    &.desktop {
      display: none;
    }
  }

  @media (max-width: 600px) {
    width: 337px;
  }
`;

export const PopUpItem = styled.li`
  padding: 6px 10px;

  &:hover {
    color: ${(props) => props.theme.colors.textDark};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
