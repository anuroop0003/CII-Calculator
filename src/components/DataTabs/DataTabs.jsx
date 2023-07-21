import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Adjustment from "./components/Adjustment";
import CorrectionFactors from "./components/CorrectionFactors";
import FuelTypes from "./components/FuelTypes";
import VoluntaryCII from "./components/VoluntaryCII";
import "./datatabs.css";

const DataTabs = ({ state }) => {
  useEffect(() => {
    var offsetHeightMain = document?.getElementById("main")?.offsetHeight;
    var offsetHeight1 =
      document?.getElementById("main-container1")?.offsetHeight;
    window.scrollTo({
      top: offsetHeightMain - offsetHeight1,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [tabSelected, setTabSelected] = useState(state.numberofyears[0]);
  return (
    <div className="datatabs-container">
      <div className="tabs-container" id="container7">
        {state?.numberofyears?.map((item, i) => (
          <span
            key={uuidv4()}
            style={{
              backgroundColor: tabSelected === item && "#ffbe34",
              color: tabSelected === item && "#091242",
            }}
            onClick={() => setTabSelected(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <FuelTypes state={state} tabSelected={tabSelected} />
      <Adjustment tabSelected={tabSelected} />
      <CorrectionFactors tabSelected={tabSelected} />
      <VoluntaryCII tabSelected={tabSelected} />
    </div>
  );
};

export default DataTabs;
