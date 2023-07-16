import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { Tooltip } from "@mui/material";
import "./quickselector.css";

const QuickSelector = () => {
  return (
    <div className="login-quick-selector-container">
      <span className="cii-calculator-container child">
        <span className="circle delay1"></span>
        <span className="circle delay2"></span>
        <span className="circle delay3"></span>
        <span className="circle delay4"></span>
        <span className="circle">
          <Tooltip title="CII Calculate">
            <CalculateRoundedIcon sx={{ fontSize: "40px" }} />
          </Tooltip>
        </span>
      </span>
      <span className="info-container child">
        <span className="circle delay1"></span>
        <span className="circle delay2"></span>
        <span className="circle delay3"></span>
        <span className="circle delay4"></span>
        <span className="circle">
          <Tooltip title="Information">
            <InfoRoundedIcon sx={{ fontSize: "40px" }} />
          </Tooltip>
        </span>
      </span>
      <span className="help-container child">
        <span className="circle delay1"></span>
        <span className="circle delay2"></span>
        <span className="circle delay3"></span>
        <span className="circle delay4"></span>
        <span className="circle">
          <Tooltip title="Help">
            <HelpCenterRoundedIcon sx={{ fontSize: "40px" }} />
          </Tooltip>
        </span>
      </span>
    </div>
  );
};

export default QuickSelector;
