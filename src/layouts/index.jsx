import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function index() {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "80px",
          maxHeight: "calc(100vh - 200px)",
          minHeight: "100vh",
          overflowY: "auto",
          scrollBehavior: "smooth",
          width: "100vw",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
