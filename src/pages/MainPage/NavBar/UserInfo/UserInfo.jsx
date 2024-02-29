import { Container, UserImage, UserName } from "./UserInfo.style";
import placeholderImage from "./../../../../assets/placeholders/gray.png";

function UserInfo() {
  return (
    <Container>
      <UserImage src={placeholderImage} alt={"username"} />
      <UserName>Name profile</UserName>
    </Container>
  );
}

export default UserInfo;
