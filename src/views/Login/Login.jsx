import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigation = useNavigate();

  const handleNavigation = (key) => {
    navigation(`/${key}`);
  };
  return (
    <div className="login-container">
      {/* <QuickSelector /> */}
      <div className="login-header">
        <span onClick={() => handleNavigation("home")}>CII Calculator</span>
        <span onClick={() => handleNavigation("home")}>Rules</span>
        <span onClick={() => handleNavigation("home")}>Help</span>
      </div>
      <div className="login-body">
        <span className="sub-title">CII – Carbon Intensity Indicator</span>
        <h1 className="title">
          Accurate and Efficient CII Calculation Services for Your Business
        </h1>
      </div>
    </div>
  );
};

export default Login;
