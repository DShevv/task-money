import { observer } from "mobx-react-lite";
import authStore from "../../stores/auth-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = observer(() => {
  const { isAuthorized } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      return navigate("/login");
    }
  }, [isAuthorized, navigate]);

  return <div>MainPage</div>;
});

export default MainPage;
