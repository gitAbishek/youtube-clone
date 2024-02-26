import { Routes, Route } from "react-router-dom";
import { PATHS } from "../constants/path";
import Main from "./MainLayouts";
import LoginForm from "../components/form/LoginForm";

const LoginLayout = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route path={PATHS.LOGIN} element={<LoginForm />} />
        </Routes>
      </Main>
    </>
  );
};

export default LoginLayout;
