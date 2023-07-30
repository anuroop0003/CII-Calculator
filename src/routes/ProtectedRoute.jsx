import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
  const navigate = useNavigate();
  const userData = localStorage?.getItem("user");
  const displayName = JSON.parse(userData)?.displayName;
  console.log(displayName);
  useEffect(() => {
    if (!displayName) {
      navigate("/");
    }
  }, [displayName]);
  return displayName && <Outlet />;
}

function PublicRoute() {
  const navigate = useNavigate();
  const userData = localStorage?.getItem("user");
  const displayName = JSON.parse(userData)?.displayName;
  console.log(displayName);
  useEffect(() => {
    if (!displayName) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [displayName]);
}

export { PrivateRoute, PublicRoute };
