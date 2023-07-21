import { useContext, useEffect } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function CbDist({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);

  useEffect(() => {
    var offsetHeightMain = document?.getElementById("main")?.offsetHeight;
    var offsetHeight1 = document?.getElementById("container11")?.offsetHeight;
    window.scrollTo({
      top: offsetHeightMain - offsetHeight1,
      left: 100,
      behavior: "smooth",
    });
  }, []);

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
    <div className="parameters-outer-warapper" id="voluntary-eeoi-container">
      <p>CbDist</p>
      <div>
        <div className="input-parameter-container">
          <span>ALB = </span>
          <CustomInput
            type="number"
            name="alb"
            onChange={(e) => handleChange(e, "cb_DIST")}
            value={parameters?.[tabSelected]?.["cb_DIST"]?.["alb"]}
            placeholder="Enter Value"
          />
        </div>
        <div className="input-parameter-container">
          <span>Dt = </span>
          <CustomInput
            type="number"
            name="dt"
            onChange={(e) => handleChange(e, "cb_DIST")}
            value={parameters?.[tabSelected]?.["cb_DIST"]?.["dt"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
