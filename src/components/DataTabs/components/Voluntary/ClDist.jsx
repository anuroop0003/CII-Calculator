import { useContext } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function ClDist({ tabSelected }) {
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
      <p>ClDist</p>
      <div>
        <div className="input-parameter-container">
          <span>Lanemeter = </span>
          <CustomInput
            type="number"
            name="lane_meter"
            onChange={(e) => handleChange(e, "cl_DIST")}
            value={parameters?.[tabSelected]?.["cl_DIST"]?.["lane_meter"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
