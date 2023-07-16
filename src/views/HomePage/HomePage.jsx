import { useNavigate } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  const navigation = useNavigate();

  const handleNavigation = (key) => {
    navigation(`/${key}`);
  };
  return (
    <div className="homepage-container">
      {/* <QuickSelector /> */}
      <div className="homepage-header">
        <span onClick={() => handleNavigation("details")}>CII Calculator</span>
        <span onClick={() => handleNavigation("details")}>Rules</span>
        <span onClick={() => handleNavigation("details")}>Help</span>
      </div>
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
