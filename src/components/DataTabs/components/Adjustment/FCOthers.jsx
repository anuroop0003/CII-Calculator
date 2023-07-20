import { useContext } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function FCOthers({ tabSelected }) {
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
      <p>FC others j</p>
      <div>
        <div className="input-parameter-container">
          <span>FC others j = </span>
          <CustomInput
            type="number"
            name="fc_others"
            onChange={(e) => handleChange(e, "FCO")}
            value={parameters?.[tabSelected]?.["FCO"]?.["fc_others"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
