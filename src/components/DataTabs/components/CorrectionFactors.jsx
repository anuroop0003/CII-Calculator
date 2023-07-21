import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";
import CustomInput from "../../Input/Input";

export default function CorrectionFactors({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);

  console.log("parameters?.data?.iceclass", parameters?.details.data?.iceclass);

  return (
    <div className="correction-factors-container" id="container10">
      <span>Correction Factors</span>
      {["IA_Super", "IA", "IB", "IC"].includes(
        parameters?.details.data?.iceclass
      ) && (
        <div className="correction-factors-child">
          <div className="title-div">fice</div>
          <CustomInput
            type="number"
            name="fice"
            onChange={(e) => handleChange(e, "correctionFactors")}
            value={parameters?.[tabSelected]?.["correctionFactors"]?.["fice"]}
            placeholder="Enter Value"
          />
        </div>
      )}
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
