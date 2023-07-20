import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CorrectionFactors from "./components/CorrectionFactors";
import FuelTypes from "./components/FuelTypes";
import "./datatabs.css";

const DataTabs = ({ state }) => {
  useEffect(() => {
    window.scrollTo({
      top: 1100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [tabSelected, setTabSelected] = useState(state.numberofyears[0]);
  return (
    <div className="datatabs-container">
      <div className="tabs-container">
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
      <CorrectionFactors tabSelected={tabSelected} />
    </div>
  );
};

export default DataTabs;
