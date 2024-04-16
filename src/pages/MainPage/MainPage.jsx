import { observer } from "mobx-react-lite";
import authStore from "../../stores/auth-store";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Container, Content, HeaderBlock } from "./MainPage.style";
import NavBar from "./NavBar/NavBar";
import userStore from "../../stores/user-store";

const MainPage = observer(() => {
  const { isAuthorized } = authStore;
  const { getInfo } = userStore;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      return navigate("/login");
    }
    if (location.pathname === "/") {
      console.log(1);
      getInfo();
      return navigate("/tasks");
    }
  }, [isAuthorized, navigate, location]);

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
