import styled from "styled-components";

export const PopUp = styled.ul`
  position: absolute;
  list-style: none;
  width: 100%;
  padding: 12px 0;
  padding-top: 4px;
  bottom: 1px;
  left: 0;
  transform: translateY(100%);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: none;
  display: none;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 10px 18px -6px rgba(0, 0, 0, 0.507);

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    height: 1px;
    width: 90%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.colors.textGrayDark};
    z-index: 2;
  }
`;

export const StyledArrow = styled.div`
  width: 12px;
  height: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 210px;
  position: relative;
  border-radius: 10px;
  padding: 12px 16px;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textGrayDark};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 140%;
  font-size: 16px;

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

    &.lang {
      padding: 6.5px 10px;
      font-size: 14px;

      & ${PopUp} {
        padding: 6.5px 0px;
        font-size: 14px;
      }
    }

    &.mobile {
      display: flex;
    }

    &.desktop {
      display: none;
    }
  }
`;

export const PopUpItem = styled.li`
  padding: 6px 16px;

  &:hover {
    color: ${(props) => props.theme.colors.textDark};
    background-color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 1024px) {
    padding: 3px 16px;
  }
`;
