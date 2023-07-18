import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Checkbox from "../Input/Checkbox/Checkbox";
import CustomInput from "../Input/Input";
import CustomSelect from "../Select/CustomSelect";
import "./datatabs.css";

const DataTabs = ({ state }) => {
  console.log(state);
  const [tabSelected, setTabSelected] = useState(state.numberofyears[0]);
  const [values, setValues] = useState({});
  const handleChange1 = (e) => {
    setValues((prev) => ({
      ...prev,
      [tabSelected]: { ...prev[tabSelected], [e.target.name]: e.target.value },
    }));
  };
  const handleChange = (e, key) => {
    console.log("hii");
    setValues((prev) => ({
      ...prev,
      [tabSelected]: {
        ...prev[tabSelected],
        [key]: {
          ...prev?.[tabSelected]?.[key],
          [e.target.name]: e.target.value,
        },
      },
    }));
  };
  const handleFCElectricalChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [tabSelected]: {
        ...prev[tabSelected],
        ["fuelData"]: {
          ...prev?.[tabSelected]?.["fcElectrical"],
          [e.target.name]: e.target.value,
        },
      },
    }));
  };
  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
      setValues((prev) => ({
        ...prev,
        [tabSelected]: {
          ...prev[tabSelected],
          [key]: {
            ...prev?.[tabSelected]?.[key],
            [e.target.name]: e.target.value,
          },
        },
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [tabSelected]: {
          ...prev[tabSelected],
          [key]: {
            ...prev?.[tabSelected]?.[key],
            [e.target.name]: false,
          },
        },
      }));
    }
  };
  console.log("values", values);
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
        {Number(state.numberoffuels) >= 1 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">1st Type of Fuel</div>
              <div>
                <CustomInput
                  name="fueltype1"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={values?.[tabSelected]?.["fuelData"]?.["fueltype1"]}
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
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={
                    values?.[tabSelected]?.["fuelData"]?.["fuelconsumption1"]
                  }
                />
              </div>
            </div>
          </div>
        )}
        {Number(state.numberoffuels) >= 2 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">2nd Type of Fuel</div>
              <div>
                <CustomInput
                  name="fueltype2"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={values?.[tabSelected]?.["fuelData"]?.["fueltype2"]}
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
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={
                    values?.[tabSelected]?.["fuelData"]?.["fuelconsumption2"]
                  }
                />
              </div>
            </div>
          </div>
        )}

        {Number(state.numberoffuels) >= 3 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">3rd Type of Fuel</div>
              <div>
                <CustomInput
                  name="fueltype3"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={values?.[tabSelected]?.["fuelData"]?.["fueltype3"]}
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
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={
                    values?.[tabSelected]?.["fuelData"]?.["fuelconsumption3"]
                  }
                />
              </div>
            </div>
          </div>
        )}

        {Number(state.numberoffuels) >= 4 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">4th Type of Fuel</div>
              <div>
                <CustomInput
                  name="fueltype4"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={values?.[tabSelected]?.["fuelData"]?.["fueltype4"]}
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
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={
                    values?.[tabSelected]?.["fuelData"]?.["fuelconsumption4"]
                  }
                />
              </div>
            </div>
          </div>
        )}

        {Number(state.numberoffuels) >= 5 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">5th Type of Fuel</div>
              <div>
                <CustomInput
                  name="fueltype5"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={values?.[tabSelected]?.["fuelData"]?.["fueltype5"]}
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
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={
                    values?.[tabSelected]?.["fuelData"]?.["fuelconsumption5"]
                  }
                />
              </div>
            </div>
          </div>
        )}

        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">Annual Distance Travelled</div>
            <div>
              <CustomInput
                name="anuualdistance"
                onChange={(e) => handleChange(e, "fuelData")}
                value={values?.[tabSelected]?.["fuelData"]?.["anuualdistance"]}
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
              checked={values?.[tabSelected]?.["Params_Types"]?.["FCV"]}
              handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
              label="FC voyage j"
            />
          </span>
          <span>
            <Checkbox
              name="TFJ"
              value={true}
              checked={values?.[tabSelected]?.["Params_Types"]?.["TFJ"]}
              handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
              label="TFj"
            />
          </span>
          <span>
            <Checkbox
              name="FCE"
              value={true}
              checked={values?.[tabSelected]?.["Params_Types"]?.["FCE"]}
              handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
              label="FC electrical j"
            />
          </span>
          <span>
            <Checkbox
              name="FCB"
              value={true}
              checked={values?.[tabSelected]?.["Params_Types"]?.["FCB"]}
              handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
              label="FC Boiler j"
            />
          </span>
          <span>
            <Checkbox
              name="FCO"
              value={true}
              checked={values?.[tabSelected]?.["Params_Types"]?.["FCO"]}
              handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
              label="FC others j"
            />
          </span>
        </div>
        {values?.[tabSelected]?.["Params_Types"]?.["FCV"] && (
          <div className="parameters-outer-warapper">
            <p>FC voyage j</p>
            <div>
              <div>
                <Checkbox
                  name="safe"
                  value={true}
                  checked={values?.[tabSelected]?.["FC_Voyage"]?.["safe"]}
                  handleChange={(e) => handleCheckboxChange(e, "FC_Voyage")}
                  label="Endanger safe navigation of a ship"
                />
              </div>
              <div>
                <Checkbox
                  name="ice"
                  checked={values?.[tabSelected]?.["FC_Voyage"]?.["ice"]}
                  value={true}
                  handleChange={(e) => handleCheckboxChange(e, "FC_Voyage")}
                  label="Sailing in ice conditions"
                />
              </div>
              <div className="input-parameter-container">
                <span>FC voyage j = </span>
                <CustomInput
                  name="fc_voyage"
                  onChange={(e) => handleChange(e, "FC_Voyage")}
                  value={values?.[tabSelected]?.["FC_Voyage"]?.["fc_voyage"]}
                  placeholder="Enter Value"
                />
              </div>
              <div className="input-parameter-container">
                <span>Dx = </span>
                <CustomInput
                  name="dx"
                  onChange={(e) => handleChange(e, "FC_Voyage")}
                  value={values?.[tabSelected]?.["FC_Voyage"]?.["dx"]}
                  placeholder="Enter Value"
                />
              </div>
            </div>
          </div>
        )}
        {values?.[tabSelected]?.["Params_Types"]?.["TFJ"] && (
          <div className="parameters-outer-warapper">
            <p>TF j</p>
            <div>
              <div>
                <CustomSelect
                  name="param1"
                  onChange={(e) => handleChange(e, "TFJ")}
                  value={values?.[tabSelected]?.["TFJ"]?.["param1"]}
                  option={[
                    { label: "Not applicable", value: 1 },
                    { label: "STS", value: 2 },
                    { label: "Shuttle tanker", value: 3 },
                  ]}
                />
              </div>
              <div className="input-parameter-container">
                <span>FC voyage j = </span>
                <CustomInput
                  name="tfj"
                  onChange={(e) => handleChange(e, "TFJ")}
                  value={values?.[tabSelected]?.["TFJ"]?.["tfj"]}
                  placeholder="Enter Value"
                />
              </div>
              <div className="input-parameter-container">
                <span>Dx = </span>
                <CustomInput
                  name="dx"
                  onChange={(e) => handleChange(e, "TFJ")}
                  value={values?.[tabSelected]?.["TFJ"]?.["dx"]}
                  placeholder="Enter Value"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTabs;
