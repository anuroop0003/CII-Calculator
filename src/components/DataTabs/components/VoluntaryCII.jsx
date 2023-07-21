import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";
import Checkbox from "../../Input/Checkbox/Checkbox";
import CbDist from "./Voluntary/CbDist";
import ClDist from "./Voluntary/ClDist";
import EEOI from "./Voluntary/EEOI";
import EEPI from "./Voluntary/EEPI";

export default function VoluntaryCII({ tabSelected }) {
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

  return (
    <div className="parameters-container2" id="container11">
      <span>Voluntary reporting of alternative CIIs</span>
      <div className="parameters-selector-container">
        <span>
          <Checkbox
            name="EEPI"
            value={true}
            checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"]}
            handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
            label="EEPI"
          />
        </span>
        <span>
          <Checkbox
            name="cb_DIST"
            value={true}
            checked={parameters?.[tabSelected]?.["Vol_Types"]?.["cb_DIST"]}
            handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
            label="cbDIST"
          />
        </span>
        <span>
          <Checkbox
            name="cl_DIST"
            value={true}
            checked={parameters?.[tabSelected]?.["Vol_Types"]?.["cl_DIST"]}
            handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
            label="clDIST"
          />
        </span>
        <span>
          <Checkbox
            name="EEOI"
            value={true}
            checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEOI"]}
            handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
            label="EEOI"
          />
        </span>
      </div>
      {parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"] && (
        <EEPI tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Vol_Types"]?.["cb_DIST"] && (
        <CbDist tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Vol_Types"]?.["cl_DIST"] && (
        <ClDist tabSelected={tabSelected} />
      )}
      {parameters?.[tabSelected]?.["Vol_Types"]?.["EEOI"] && (
        <EEOI tabSelected={tabSelected} />
      )}
    </div>
  );
}
