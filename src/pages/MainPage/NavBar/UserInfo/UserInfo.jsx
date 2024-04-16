import { Container, UserImage, UserName } from "./UserInfo.style";
import placeholderImage from "./../../../../assets/placeholders/gray.png";
import { observer } from "mobx-react-lite";
import userStore from "../../../../stores/user-store";

export const UserInfo = observer(() => {
  const { user } = userStore;
  return (
    <Container>
      <UserImage
        src={user.photo ? user.photo : placeholderImage}
        alt={user.name}
      />
      <UserName>{user.name}</UserName>
    </Container>
  );
});
