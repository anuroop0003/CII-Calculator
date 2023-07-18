import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Checkbox from "../Input/Checkbox/Checkbox";
import CustomInput from "../Input/Input";
import "./datatabs.css";

const DataTabs = ({ state }) => {
  const [tabSelected, setTabSelected] = useState(state.numberofyears[0]);
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [tabSelected]: { ...prev[tabSelected], [e.target.name]: e.target.value },
    }));
  };
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setValues((prev) => ({
        ...prev,
        [tabSelected]: {
          ...prev[tabSelected],
          [e.target.name]: e.target.value,
        },
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [tabSelected]: { ...prev[tabSelected], [e.target.name]: false },
      }));
    }
  };
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
      <div className="parameters-container">
        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">1st Type of Fuel</div>
            <div>
              <CustomInput
                name="fueltype1"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fueltype1"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
          <div className="fuel-section-child">
            <div className="title-div">1st Annual Fuel Consumption</div>
            <div>
              <CustomInput
                name="fuelconsumption1"
                placeholder="Enter Value"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fuelconsumption1"]}
              />
            </div>
          </div>
        </div>
        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">2nd Type of Fuel</div>
            <div>
              <CustomInput
                name="fueltype2"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fueltype2"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
          <div className="fuel-section-child">
            <div className="title-div">2nd Annual Fuel Consumption</div>
            <div>
              <CustomInput
                name="fuelconsumption2"
                placeholder="Enter Value"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fuelconsumption2"]}
              />
            </div>
          </div>
        </div>
        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">3rd Type of Fuel</div>
            <div>
              <CustomInput
                name="fueltype3"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fueltype3"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
          <div className="fuel-section-child">
            <div className="title-div">3rd Annual Fuel Consumption</div>
            <div>
              <CustomInput
                name="fuelconsumption3"
                placeholder="Enter Value"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fuelconsumption3"]}
              />
            </div>
          </div>
        </div>
        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">4th Type of Fuel</div>
            <div>
              <CustomInput
                name="fueltype4"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fueltype4"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
          <div className="fuel-section-child">
            <div className="title-div">4th Annual Fuel Consumption</div>
            <div>
              <CustomInput
                name="fuelconsumption4"
                placeholder="Enter Value"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fuelconsumption4"]}
              />
            </div>
          </div>
        </div>
        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">5th Type of Fuel</div>
            <div>
              <CustomInput
                name="fueltype5"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fueltype5"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
          <div className="fuel-section-child">
            <div className="title-div">5th Annual Fuel Consumption</div>
            <div>
              <CustomInput
                name="fuelconsumption5"
                placeholder="Enter Value"
                onChange={handleChange}
                value={values?.[tabSelected]?.["fuelconsumption5"]}
              />
            </div>
          </div>
        </div>
        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">Annual Distance Travelled</div>
            <div>
              <CustomInput
                name="anuualdistance"
                onChange={handleChange}
                value={values?.[tabSelected]?.["anuualdistance"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="parameters-container2">
        <span>Adjustment and Correction Factors</span>
        <div className="parameters-selector-container">
          <span>
            <Checkbox
              name="FCV"
              value={true}
              checked={values?.[tabSelected]?.["FCV"]}
              handleChange={handleCheckboxChange}
              label="FC voyage j"
            />
          </span>
          <span>
            <Checkbox
              name="TFJ"
              value={true}
              checked={values?.[tabSelected]?.["TFJ"]}
              handleChange={handleCheckboxChange}
              label="TFj"
            />
          </span>
          <span>
            <Checkbox
              name="FCE"
              value={true}
              checked={values?.[tabSelected]?.["FCE"]}
              handleChange={handleCheckboxChange}
              label="FC electrical j"
            />
          </span>
          <span>
            <Checkbox
              name="FCB"
              value={true}
              checked={values?.[tabSelected]?.["FCB"]}
              handleChange={handleCheckboxChange}
              label="FC Boiler j"
            />
          </span>
          <span>
            <Checkbox
              name="FCO"
              value={true}
              checked={values?.[tabSelected]?.["FCO"]}
              handleChange={handleCheckboxChange}
              label="FC others j"
            />
          </span>
        </div>
        <div className="fc-voyage-container">
          <p>FC voyage j</p>
          <div>
            <div>
              <Checkbox
                name="safe"
                value={true}
                checked={values?.[tabSelected]?.["safe"]}
                handleChange={handleCheckboxChange}
                label="Endanger safe navigation of a ship"
              />
            </div>
            <div>
              <Checkbox
                name="ice"
                checked={values?.[tabSelected]?.["ice"]}
                value={true}
                handleChange={handleCheckboxChange}
                label="Sailing in ice conditions"
              />
            </div>
            <div className="dx-container">
              <span>Dx = </span>
              <CustomInput
                name="Dx"
                onChange={handleChange}
                value={values?.[tabSelected]?.["Dx"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTabs;
