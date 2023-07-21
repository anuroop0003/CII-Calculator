import { useContext, useEffect } from "react";
import { fuelTypes } from "../../../../data/fuelTypes";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";
import CustomSelect from "../../../Select/CustomSelect";

export default function EEOI({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);

  useEffect(() => {
    var offsetHeightMain = document?.getElementById("main")?.offsetHeight;
    var offsetHeight1 = document?.getElementById("container11")?.offsetHeight;
    window.scrollTo({
      top: offsetHeightMain - offsetHeight1,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const handleChange = (e, key) => {
    setParameters((prev) => ({
      ...prev,
      [tabSelected]: {
        ...prev[tabSelected],
        [key]: {
          ...prev?.[tabSelected]?.[key],
          [e.target.name]: Number(e.target.value),
        },
      },
    }));
  };

  const handleSelectChange = (e, key) => {
    setParameters((prev) => ({
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

  return (
    <div className="parameters-outer-warapper" id="voluntary-eeoi-container">
      <p>EEOI</p>
      <div>
        <div className="input-parameter-container">
          <span>Number of fuel type = </span>
          <CustomSelect
            option={[
              { value: 1, label: 1 },
              { value: 2, label: 2 },
              { value: 3, label: 3 },
              { value: 4, label: 4 },
              { value: 5, label: 5 },
            ]}
            name="numberoffuel"
            onChange={(e) => handleSelectChange(e, "EEOI")}
            value={parameters?.[tabSelected]?.["EEOI"]?.["numberoffuel"]}
            // label="Select Fuel"
          />
        </div>
        {Number(parameters?.[tabSelected]?.["EEOI"]?.["numberoffuel"]) >= 1 && (
          <div className="input-parameter-container">
            <span>Name of fuel 1 = </span>
            <CustomSelect
              option={fuelTypes}
              name="fueltype1"
              onChange={(e) => handleSelectChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["fueltype1"]}
              // label="Select Fuel"
            />
          </div>
        )}
        {parameters?.[tabSelected]?.["EEOI"]?.["fueltype1"] === "other" && (
          <div className="input-parameter-container">
            <span>CF = </span>
            <CustomInput
              type="number"
              name="cf1"
              onChange={(e) => handleChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["cf1"]}
              placeholder="Enter Value"
            />
          </div>
        )}
        {Number(parameters?.[tabSelected]?.["EEOI"]?.["numberoffuel"]) >= 2 && (
          <div className="input-parameter-container">
            <span>Name of fuel 2 = </span>
            <CustomSelect
              option={fuelTypes}
              name="fueltype2"
              onChange={(e) => handleSelectChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["fueltype2"]}
              // label="Select Fuel"
            />
          </div>
        )}
        {parameters?.[tabSelected]?.["EEOI"]?.["fueltype2"] === "other" && (
          <div className="input-parameter-container">
            <span>CF = </span>
            <CustomInput
              type="number"
              name="cf2"
              onChange={(e) => handleChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["cf2"]}
              placeholder="Enter Value"
            />
          </div>
        )}
        {Number(parameters?.[tabSelected]?.["EEOI"]?.["numberoffuel"]) >= 3 && (
          <div className="input-parameter-container">
            <span>Name of fuel 3 = </span>
            <CustomSelect
              option={fuelTypes}
              name="fueltype3"
              onChange={(e) => handleSelectChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["fueltype3"]}
              // label="Select Fuel"
            />
          </div>
        )}
        {parameters?.[tabSelected]?.["EEOI"]?.["fueltype3"] === "other" && (
          <div className="input-parameter-container">
            <span>CF = </span>
            <CustomInput
              type="number"
              name="cf3"
              onChange={(e) => handleChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["cf3"]}
              placeholder="Enter Value"
            />
          </div>
        )}
        {Number(parameters?.[tabSelected]?.["EEOI"]?.["numberoffuel"]) >= 4 && (
          <div className="input-parameter-container">
            <span>Name of fuel 4 = </span>
            <CustomSelect
              option={fuelTypes}
              name="fueltype4"
              onChange={(e) => handleSelectChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["fueltype4"]}
              // label="Select Fuel"
            />
          </div>
        )}
        {parameters?.[tabSelected]?.["EEOI"]?.["fueltype4"] === "other" && (
          <div className="input-parameter-container">
            <span>CF = </span>
            <CustomInput
              type="number"
              name="cf4"
              onChange={(e) => handleChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["cf4"]}
              placeholder="Enter Value"
            />
          </div>
        )}
        {Number(parameters?.[tabSelected]?.["EEOI"]?.["numberoffuel"]) >= 5 && (
          <div className="input-parameter-container">
            <span>Name of fuel 5 = </span>
            <CustomSelect
              option={fuelTypes}
              name="fueltype5"
              onChange={(e) => handleSelectChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["fueltype5"]}
              // label="Select Fuel"
            />
          </div>
        )}
        {parameters?.[tabSelected]?.["EEOI"]?.["fueltype5"] === "other" && (
          <div className="input-parameter-container">
            <span>CF = </span>
            <CustomInput
              type="number"
              name="cf5"
              onChange={(e) => handleChange(e, "EEOI")}
              value={parameters?.[tabSelected]?.["EEOI"]?.["cf5"]}
              placeholder="Enter Value"
            />
          </div>
        )}

        <div className="input-parameter-container">
          <span>FCij = </span>
          <CustomInput
            type="number"
            name="fc_ij"
            onChange={(e) => handleChange(e, "EEOI")}
            value={parameters?.[tabSelected]?.["EEOI"]?.["fc_ij"]}
            placeholder="Enter Value"
          />
        </div>
        <div className="input-parameter-container">
          <span>mcargo = </span>
          <CustomInput
            type="number"
            name="mcargo"
            onChange={(e) => handleChange(e, "EEOI")}
            value={parameters?.[tabSelected]?.["EEOI"]?.["mcargo"]}
            placeholder="Enter Value"
          />
        </div>
        <div className="input-parameter-container">
          <span>D = </span>
          <CustomInput
            type="number"
            name="d"
            onChange={(e) => handleChange(e, "EEOI")}
            value={parameters?.[tabSelected]?.["EEOI"]?.["d"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
