import styled from "styled-components";

export const PopUp = styled.ul`
  position: absolute;
  list-style: none;
  width: calc(100% + 2px);
  padding: 12px 0;
  padding-top: 0;
  bottom: 0;
  left: -1px;
  transform: translateY(100%);
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: none;
  display: none;
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
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  border-radius: 8px;
  padding: 12px 10px;
  background: transparent;
  color: ${(props) => props.theme.colors.textGrayDark};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.active {
    border-bottom: none;
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

  @media (max-width: 1024px) {
    width: 60px;

    &.mobile {
      display: flex;
    }

    &.desktop {
      display: none;
    }
  }
`;

export const PopUpItem = styled.li`
  padding: 6px 10px;

  &:hover {
    color: ${(props) => props.theme.colors.textDark};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
