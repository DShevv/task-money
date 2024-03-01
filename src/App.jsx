import { ThemeProvider } from "styled-components";
import { ThemeDark } from "./theme/theme-dark";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/AuthPages/LoginPage/LoginPage";
import RegisterPage from "./pages/AuthPages/RegisterPage/RegisterPage";
import ForgotPage from "./pages/AuthPages/ForgotPage/ForgotPage";
import ResetPage from "./pages/AuthPages/ResetPage/ResetPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import SingleTask from "./pages/SingleTask/SingleTask";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import authStore from "./stores/auth-store";

const App = observer(() => {
  const { stopStore } = authStore;

  useEffect(() => {
    return () => stopStore();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<MainPage />}>
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks/:id" element={<SingleTask />} />
          <Route path="/challenge" element={<>Challenge</>} />
          <Route path="/wallet" element={<>Wallet</>} />
          <Route path="/rating" element={<>Rating</>} />
          <Route path="/progress" element={<>Progress</>} />
          <Route path="/settings" element={<>Settings</>} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    )
  );

  return (
    <>
      <ThemeProvider theme={ThemeDark}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
});

export default App;
