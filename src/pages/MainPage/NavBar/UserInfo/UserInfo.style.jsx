import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10px;
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const UserImage = styled.img`
  width: 49px;
  height: 49px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.grayEmpty};

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.primary};
`;
