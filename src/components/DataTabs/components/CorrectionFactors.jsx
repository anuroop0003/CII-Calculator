import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";
import CustomInput from "../../Input/Input";

export default function CorrectionFactors({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);

  console.log("parameters", parameters);
  return (
    <div className="correction-factors-container">
      <span>Correction Factors</span>
      <div className="correction-factors-child">
        <div className="title-div">fi</div>
        <CustomInput
          type="number"
          name="fi"
          onChange={(e) => handleChange(e, "correctionFactors")}
          value={parameters?.[tabSelected]?.["correctionFactors"]?.["fi"]}
          placeholder="Enter Value"
        />
      </div>
      <div className="correction-factors-child">
        <div className="title-div">fm</div>
        <CustomInput
          type="number"
          name="fm"
          onChange={(e) => handleChange(e, "correctionFactors")}
          value={parameters?.[tabSelected]?.["correctionFactors"]?.["fm"]}
          placeholder="Enter Value"
        />
      </div>
      <div className="correction-factors-child">
        <div className="title-div">fc</div>
        <CustomInput
          type="number"
          name="fc"
          onChange={(e) => handleChange(e, "correctionFactors")}
          value={parameters?.[tabSelected]?.["correctionFactors"]?.["fc"]}
          placeholder="Enter Value"
        />
      </div>
      <div className="correction-factors-child">
        <div className="title-div">fi VSE</div>
        <CustomInput
          type="number"
          name="fi_vse"
          onChange={(e) => handleChange(e, "correctionFactors")}
          value={parameters?.[tabSelected]?.["correctionFactors"]?.["fi_vse"]}
          placeholder="Enter Value"
        />
      </div>
    </div>
  );
}
