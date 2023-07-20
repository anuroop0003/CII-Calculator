import { useContext } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function EEPI({ tabSelected }) {
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
  return (
    <div className="parameters-outer-warapper" id="fc-voyage">
      <p>EEPI</p>
      <div>
        <div className="input-parameter-container">
          <span>Dl = </span>
          <CustomInput
            type="number"
            name="dl"
            onChange={(e) => handleChange(e, "EEPI")}
            value={parameters?.[tabSelected]?.["EEPI"]?.["dl"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
