import React from "react";

import UserComponent from "../Pages/listUsers/UserComponent";
import Login from "../Pages/Login/Login";
import Registro from "../Pages/Registro/registro";
import Login1 from "../Pages/DashBoard/aposlogin";
import { isAuthenticate } from "../auth";
import { Navigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

export const Router = () => {
  const auth = isAuthenticate();

  return (
    <Routes>
      {!!auth && (
        <>
          <Route path="admin" element={<UserComponent />} />
          <Route path="private" element={<Login1 />} />
        </>
      )}
      {!auth && (
        <>
          <Route path="/" element={<Login />} />
          <Route path="logged" element={<Navigate to="private" />} />
          <Route path="registro" element={<Registro />} />
        </>
      )}

      <Route path="*" element={<Navigate to={auth ? "private" : "/"} />} />
    </Routes>
  );
};
