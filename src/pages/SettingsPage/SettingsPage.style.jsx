import styled from "styled-components";
import success from "../../assets/icons/success.svg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    padding: 20px 16px 0 16px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  padding: 16px;
  max-width: 700px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const PhotoControls = styled.div`
  display: flex;
  gap: 24px;
`;

export const Photo = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const PhotoButtons = styled.div`
  padding-right: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media (max-width: 770px) {
    padding-right: 0;
  }
`;

export const PhotoTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 110%;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
`;

export const PhotoBox = styled.div`
  display: flex;
`;

export const PhotoRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.primaryDark};
  cursor: pointer;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ImageReq = styled.div`
  padding-left: 47px;
  border-left: solid 1px ${(props) => props.theme.colors.gray};
  color: ${(props) =>
    props.$iserror ? props.theme.colors.error : props.theme.colors.text};

  @media (max-width: 770px) {
    display: none;
  }
`;

export const ReqTitle = styled.div`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
`;

export const ReqItems = styled.li`
  font-weight: 400;
  font-size: 14px;

  line-height: 140%;
`;

export const StyledForm = styled.section`
  border-radius: 10px;
  max-width: 700px;
  padding: 14px 16px 24px 16px;

  background-color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 770px) {
    background-color: transparent;
    padding: 0;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormContainer = styled.div`
  max-width: 358px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 770px) {
    flex-direction: column;
    max-width: 358px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
  }
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
  background-image: url(${success});
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
