import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import Ellipse1 from "../../assets/login/Ellipse1.svg";
import Ellipse2 from "../../assets/login/Ellipse2.svg";
import Ellipse3 from "../../assets/login/Ellipse3.svg";
import GoogleLogo from "../../assets/login/Googlelogo.png";
import Vector1 from "../../assets/login/Vector1.svg";
import Logo from "../../assets/logo.png";
import { auth, provider } from "../../googleSignIn/config";
import "./loginpage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  function handleGoogleAuth() {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="login-container">
      <img className="ellipse-1" src={Ellipse1} />
      <img className="ellipse-2" src={Ellipse2} />
      <img className="ellipse-3" src={Ellipse3} />
      <img className="vector-1" src={Vector1} />
      <div className="logger-wrapper">
        <img src={Logo} />
        <p>CII Calculator</p>
        <button onClick={() => handleGoogleAuth()}>
          <img src={GoogleLogo} />
          <span>Sign up with Google</span>
        </button>
      </div>
    </div>
  );
}
