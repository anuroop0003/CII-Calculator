import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import LogoImg from "../../assets/logo.png";
import "./index.css";

const style = {
  borderBottom: "5px solid #ffb629",
  transition: "border-bottom 2s",
};

export default function index() {
  const [key, setKey] = useState(sessionStorage.getItem("key") ?? "");
  const navigate = useNavigate();
  const handleNavigation = (key) => {
    navigate(`/${key}`);
    sessionStorage.setItem("key", key);
    setKey(key);
  };
  function handleLogOut() {
    alert("clicked");
    // signOut(auth, provider)
    //   .then((res) => {
    //     localStorage.clear();
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  return (
    <div className="homepage-header">
      <img
        title={JSON.parse(localStorage.getItem("user")).displayName}
        onClick={() => handleNavigation("home")}
        src={JSON.parse(localStorage.getItem("user")).photoURL}
      />
      <span
        style={key === "details" ? style : {}}
        onClick={() => handleNavigation("details")}
      >
        CII Calculator
      </span>
      <span
        style={key === "result" ? style : {}}
        onClick={() => handleNavigation("result")}
      >
        Rules
      </span>
      <span
        style={key === "help" ? style : {}}
        onClick={() => alert("No page available")}
      >
        Help
      </span>
      <button
        title="LOG OUT"
        className="header-logout"
        onClick={() => handleLogOut()}
      >
        <i className="fa-solid fa-right-from-bracket fa-sm"></i>
      </button>
    </div>
  );
}
