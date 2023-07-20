import { useContext } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function EEOI({ tabSelected }) {
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
      <p>EEOI</p>
      <div>
        <div className="input-parameter-container">
          <span>Dl = </span>
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
