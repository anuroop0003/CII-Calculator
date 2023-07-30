import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const navigate = useNavigate();
  const userData = localStorage?.getItem("user");
  const displayName = JSON.parse(userData)?.displayName;
  useEffect(() => {
    if (!displayName) {
      navigate("/");
    }
  }, [displayName]);
  return displayName && <Outlet />;
}

export default ProtectedRoute;
