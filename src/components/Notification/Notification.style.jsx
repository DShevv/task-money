import styled from "styled-components";
import success from "../../assets/icons/success.svg";
import error from "../../assets/icons/error.svg";

export const AllNoti = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const NotiContainer = styled.div`
  border-left: 3px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 16px 16.5px 16.5px 16px;
  width: 692px;
  display: flex;
  gap: 16px;
  /*  position: fixed;
  width: calc(100% - 40px);
  bottom: 78px; */

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const NotiSuccess = styled.div`
  flex: 0 0 24px;
  color: ${(props) => (props.$ok ? "#FEBB39" : "#F44336")};
  background-image: ${(props) =>
    props.$ok ? `url(${success})` : `url(${error})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 14px;
`;

export const NotiCaption = styled.div`
  flex: 1 1 auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text};

  span {
    font-weight: 500;
  }
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
