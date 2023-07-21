import { useContext, useEffect } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";

export default function FCOthers({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);

  useEffect(() => {
    var offsetHeightMain = document?.getElementById("main")?.offsetHeight;
    var offsetHeight1 = document?.getElementById("container9")?.offsetHeight;
    var offsetHeight2 = document?.getElementById("container10")?.offsetHeight;
    var offsetHeight3 = document?.getElementById("container11")?.offsetHeight;
    window.scrollTo({
      top:
        offsetHeightMain - (offsetHeight1 + offsetHeight2 + offsetHeight3 + 40),
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
