import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  // document.documentElement.style.setProperty("--vh", `${vh}px`);

  useEffect(() => {
    const disableBackButton = (event) => {
      event.preventDefault();
      history.pushState(null, null, "/home"); // Replace '/' with the desired route when logged in.
    };
    history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", disableBackButton);
    return () => {
      window.removeEventListener("popstate", disableBackButton);
    };
  }, [navigate]);

  return (
    <div className="homepage-container">
      <div className="homepage-body">
        <span className="sub-title">CII – Carbon Intensity Indicator</span>
        <h1 className="title">
          Accurate and Efficient CII Calculation Services for Your Business
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
