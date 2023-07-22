import { useContext, useEffect } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import Checkbox from "../../../Input/Checkbox/Checkbox";
import CustomInput from "../../../Input/Input";

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
    <div className="parameters-outer-warapper">
      <p>FC boiler j</p>
      <div>
        <Checkbox
          name="param1"
          checked={parameters?.[tabSelected]?.["FCB"]?.["param1"]}
          value={true}
          handleChange={(e) => {
            handleCheckboxChange(e, "FCB");
            handleCheckboxChange(
              { target: { value: false, name: "param2" } },
              "FCB"
            );
          }}
          label="Boilers used for cargo heating"
        />
        <Checkbox
          name="param2"
          checked={parameters?.[tabSelected]?.["FCB"]?.["param2"]}
          value={true}
          handleChange={(e) => {
            handleCheckboxChange(e, "FCB");
            handleCheckboxChange(
              { target: { value: false, name: "param1" } },
              "FCB"
            );
          }}
          label="Tankers which use steam driven cargo pumps"
        />
        {(parameters?.[tabSelected]?.["FCB"]?.["param1"] ||
          parameters?.[tabSelected]?.["FCB"]?.["param2"]) && (
          <div className="input-parameter-container">
            <span>value = </span>
            <CustomInput
              type="number"
              name="fc_boiler"
              onChange={(e) => handleChange(e, "FCB")}
              value={parameters?.[tabSelected]?.["FCB"]?.["fc_boiler"]}
              placeholder="Enter Value"
            />
          </div>
        )}
      </div>
    </div>
  );
}
