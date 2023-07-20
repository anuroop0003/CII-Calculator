import { useContext } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import Checkbox from "../../../Input/Checkbox/Checkbox";
import CustomInput from "../../../Input/Input";

export default function FCVoyage({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);

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
  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
      setParameters((prev) => ({
        ...prev,
        [tabSelected]: {
          ...prev[tabSelected],
          [key]: {
            ...prev?.[tabSelected]?.[key],
            [e.target.name]: true,
          },
        },
      }));
    } else {
      setParameters((prev) => ({
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
  return (
    <div className="parameters-outer-warapper" id="fc-voyage">
      <p>FC voyage j</p>
      <div>
        <Checkbox
          name="safe"
          value={true}
          checked={parameters?.[tabSelected]?.["FCV"]?.["safe"]}
          handleChange={(e) => {
            handleCheckboxChange(e, "FCV");
            handleCheckboxChange(
              { target: { value: false, name: "ice" } },
              "FCV"
            );
          }}
          label="Endanger safe navigation of a ship"
        />
        <Checkbox
          name="ice"
          checked={parameters?.[tabSelected]?.["FCV"]?.["ice"]}
          value={true}
          handleChange={(e) => {
            handleCheckboxChange(e, "FCV");
            handleCheckboxChange(
              { target: { value: false, name: "safe" } },
              "FCV"
            );
          }}
          label="Sailing in ice conditions"
        />
        <div className="input-parameter-container">
          <span>FC voyage j = </span>
          <CustomInput
            type="number"
            name="fc_voyage"
            onChange={(e) => handleChange(e, "FCV")}
            value={parameters?.[tabSelected]?.["FCV"]?.["fc_voyage"]}
            placeholder="Enter Value"
          />
        </div>
        <div className="input-parameter-container">
          <span>Dx = </span>
          <CustomInput
            type="number"
            name="dx"
            onChange={(e) => handleChange(e, "FCV")}
            value={parameters?.[tabSelected]?.["FCV"]?.["dx"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
