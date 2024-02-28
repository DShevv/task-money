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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<>Tasks</>} />
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
};

export default App;
