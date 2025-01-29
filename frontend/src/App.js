import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "./components/notFoundPage";
import LoginPage from "./components/loginPage";
import MainPage from "./components/mainPage";
import { PrivateRout, PublicRoute } from "./components/misc";
import ROUTES from "./apiConfig";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRout />}>
          <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
