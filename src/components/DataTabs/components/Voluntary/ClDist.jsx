import { useContext, useEffect } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function ClDist({ tabSelected }) {
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
