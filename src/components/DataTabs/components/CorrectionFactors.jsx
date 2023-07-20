import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";
import Checkbox from "../../Input/Checkbox/Checkbox";
import FCBoiler from "./FCBoiler";
import FCElectrical from "./FCElectrical";
import FCVoyage from "./FCVoyage";
import TFJ from "./TFJ";

const CorrectionFactors = ({ tabSelected }) => {
  const { parameters, setParameters } = useContext(CalculationContext);

  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
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
    <div className="parameters-container2">
      <span>Adjustment and Correction Factors</span>
      <div className="parameters-selector-container">
        <span>
          <Checkbox
            name="FCV"
            value={true}
            checked={parameters?.[tabSelected]?.["Params_Types"]?.["FCV"]}
            handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
            label="FC voyage j"
          />
        </span>
        <span>
          <Checkbox
            name="TFJ"
            value={true}
            checked={parameters?.[tabSelected]?.["Params_Types"]?.["TFJ"]}
            handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
            label="TFj"
          />
        </span>
        <span>
          <Checkbox
            name="FCE"
            value={true}
            checked={parameters?.[tabSelected]?.["Params_Types"]?.["FCE"]}
            handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
            label="FC electrical j"
          />
        </span>
        <span>
          <Checkbox
            name="FCB"
            value={true}
            checked={parameters?.[tabSelected]?.["Params_Types"]?.["FCB"]}
            handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
            label="FC Boiler j"
          />
        </span>
        <span>
          <Checkbox
            name="FCO"
            value={true}
            checked={parameters?.[tabSelected]?.["Params_Types"]?.["FCO"]}
            handleChange={(e) => handleCheckboxChange(e, "Params_Types")}
            label="FC others j"
          />
        </span>
      </div>
      {parameters?.[tabSelected]?.["Params_Types"]?.["FCV"] && (
        <FCVoyage tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Params_Types"]?.["TFJ"] && (
        <TFJ tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Params_Types"]?.["FCE"] && (
        <FCElectrical tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Params_Types"]?.["FCB"] && (
        <FCBoiler tabSelected={tabSelected} />
      )}
    </div>
  );
};
export default CorrectionFactors;
