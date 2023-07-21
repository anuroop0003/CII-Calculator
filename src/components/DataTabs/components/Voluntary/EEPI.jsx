import { useContext, useEffect } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function EEPI({ tabSelected }) {
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
