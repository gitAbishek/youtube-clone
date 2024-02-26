import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./MainLayouts";
import { PATHS } from "../constants/path";
import Home from "../page/Home";
import Navbar from "../components/navbar/Navbar";
import YoutubeVideoPlayer from "../page/YoutubeVideoPlayer";
import LoginForm from "../components/form/LoginForm";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchQuerySelected = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar onSearchQuerySelected={onSearchQuerySelected} />
      <Main>
        <Routes>
          <Route
            path={PATHS.HOME}
            element={<Home searchQuery={searchQuery} />}
          />
          <Route
            path={`${PATHS.VIDEO_PLAYER}/:id`}
            element={<YoutubeVideoPlayer />}
          />
          <Route path={PATHS.LOGIN} element={<LoginForm />} />
        </Routes>
      </Main>
    </>
  );
};

export default Layout;
