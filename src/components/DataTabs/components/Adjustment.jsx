import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";
import Checkbox from "../../Input/Checkbox/Checkbox";
import FCBoiler from "./Adjustment/FCBoiler";
import FCElectrical from "./Adjustment/FCElectrical";
import FCOthers from "./Adjustment/FCOthers";
import FCVoyage from "./Adjustment/FCVoyage";
import TFJ from "./Adjustment/TFJ";

const Adjustment = ({ tabSelected }) => {
  const { parameters, setParameters } = useContext(CalculationContext);

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
  console.log("parameters", parameters);
  return (
    <div className="parameters-container2">
      <span>Adjustments</span>
      <div className="parameters-selector-container">
        <span>
          <Checkbox
            name="FCV"
            value={true}
            checked={parameters?.[tabSelected]?.["Adj_Types"]?.["FCV"]}
            handleChange={(e) => handleCheckboxChange(e, "Adj_Types")}
            label="FC voyage j"
          />
        </span>
        <span>
          <Checkbox
            name="TFJ"
            value={true}
            checked={parameters?.[tabSelected]?.["Adj_Types"]?.["TFJ"]}
            handleChange={(e) => {
              handleCheckboxChange(e, "Adj_Types");
              handleCheckboxChange(
                { target: { value: false, name: "FCE" } },
                "Adj_Types"
              );
              handleCheckboxChange(
                { target: { value: false, name: "FCB" } },
                "Adj_Types"
              );
              handleCheckboxChange(
                { target: { value: false, name: "FCO" } },
                "Adj_Types"
              );
            }}
            label="TFj"
          />
        </span>
        <span>
          <Checkbox
            name="FCE"
            value={true}
            checked={parameters?.[tabSelected]?.["Adj_Types"]?.["FCE"]}
            handleChange={(e) => {
              handleCheckboxChange(e, "Adj_Types");
              handleCheckboxChange(
                { target: { value: false, name: "TFJ" } },
                "Adj_Types"
              );
            }}
            label="FC electrical j"
          />
        </span>
        <span>
          <Checkbox
            name="FCB"
            value={true}
            checked={parameters?.[tabSelected]?.["Adj_Types"]?.["FCB"]}
            handleChange={(e) => {
              handleCheckboxChange(e, "Adj_Types");
              handleCheckboxChange(
                { target: { value: false, name: "TFJ" } },
                "Adj_Types"
              );
            }}
            label="FC Boiler j"
          />
        </span>
        <span>
          <Checkbox
            name="FCO"
            value={true}
            checked={parameters?.[tabSelected]?.["Adj_Types"]?.["FCO"]}
            handleChange={(e) => {
              handleCheckboxChange(e, "Adj_Types");
              handleCheckboxChange(
                { target: { value: false, name: "TFJ" } },
                "Adj_Types"
              );
            }}
            label="FC others j"
          />
        </span>
      </div>
      {parameters?.[tabSelected]?.["Adj_Types"]?.["FCV"] && (
        <FCVoyage tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Adj_Types"]?.["TFJ"] && (
        <TFJ tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Adj_Types"]?.["FCE"] && (
        <FCElectrical tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Adj_Types"]?.["FCB"] && (
        <FCBoiler tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Adj_Types"]?.["FCO"] && (
        <FCOthers tabSelected={tabSelected} />
      )}
    </div>
  );
};
export default Adjustment;
