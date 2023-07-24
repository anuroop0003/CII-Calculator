import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";
import CustomInput from "../../Input/Input";

export default function CorrectionFactors({ tabSelected }) {
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
    <div className="correction-factors-container" id="container10">
      <span>Correction Factors</span>
      {["IA_Super", "IA", "IB", "IC"].includes(
        parameters?.details?.iceclass
      ) && (
        <div className="correction-factors-child">
          <div className="title-div">fice</div>
          <CustomInput
            type="number"
            name="f_ice"
            onChange={(e) => handleChange(e, "correctionFactors")}
            value={parameters?.[tabSelected]?.["correctionFactors"]?.["f_ice"]}
            placeholder="Enter Value"
          />
        </div>
      )}
      {parameters?.details?.typeofvessel === "Tanker" && (
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
      )}
      {parameters?.details?.typeofvessel === "Bulk carrier" && (
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
      )}
      {document.querySelector(".container10") && console.log("empty")}
    </div>
  );
}
