import { observer } from "mobx-react-lite";
import authStore from "../../stores/auth-store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Content, HeaderBlock } from "./MainPage.style";
import NavBar from "./NavBar/NavBar";

const MainPage = observer(() => {
  const { isAuthorized } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      return navigate("/login");
    }
  }, [isAuthorized, navigate]);

  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderBlock />
        <Outlet />
      </Content>
    </Container>
  );
});

export default MainPage;
