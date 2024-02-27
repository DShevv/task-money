import { observer } from "mobx-react-lite";
import authStore from "../../../stores/auth-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = observer(() => {
  const { login, isAuthorized } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      navigate("/");
    }
  }, [isAuthorized, navigate]);

  return (
    <div>
      <button
        onClick={() => {
          login({ email: "test@example.com", password: "testPassword" });
        }}
      >
        Sign in
      </button>
    </div>
  );
});

export default LoginPage;
