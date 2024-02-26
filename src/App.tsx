import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layouts";
import {
  AuthenticationRoute,
  PublicRoute,
} from "./page/auth/AuthenticationRoute";
import { PATHS } from "./constants/path";
import Login from "./page/Login";
import { useContextStore } from "./context/context.consumer";

function App() {
  const {isLoggedIn} = useContextStore();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isLoggedIn={isLoggedIn} />}>
          <Route path={PATHS.LOGIN} element={<Login />} />
        </Route>
        <Route element={<AuthenticationRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/*" element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
