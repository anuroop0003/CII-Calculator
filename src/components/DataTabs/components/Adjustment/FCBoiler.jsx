import { useContext, useEffect } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import Checkbox from "../../../Input/Checkbox/Checkbox";

export default function FCBoiler({ tabSelected }) {
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

  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
      setParameters((prev) => ({
        ...prev,
        [tabSelected]: {
          ...prev[tabSelected],
          [key]: {
            ...prev?.[tabSelected]?.[key],
            [e.target.name]: true,
          },
        },
      }));
    } else {
      setParameters((prev) => ({
        ...prev,
        [tabSelected]: {
          ...prev[tabSelected],
          [key]: {
            ...prev?.[tabSelected]?.[key],
            [e.target.name]: false,
          },
        },
      }));
    }
  };

  return (
    <div className="parameters-outer-warapper">
      <p>FC boiler j</p>
      <div>
        <Checkbox
          name="param1"
          checked={parameters?.[tabSelected]?.["FCB"]?.["param1"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCB")}
          label="Boilers used for cargo heating"
        />
        <Checkbox
          name="param2"
          checked={parameters?.[tabSelected]?.["FCB"]?.["param2"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCB")}
          label="Tankers which use steam driven cargo pumps"
        />
      </div>
    </div>
  );
}
