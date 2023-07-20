import { useContext } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import CustomInput from "../../../Input/Input";
import CustomSelect from "../../../Select/CustomSelect";

export default function TFJ({ tabSelected }) {
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

  const handleSelectChange = (e, key) => {
    setParameters((prev) => ({
      ...prev,
      [tabSelected]: {
        ...prev[tabSelected],
        [key]: {
          ...prev?.[tabSelected]?.[key],
          [e.target.name]: e.target.value,
        },
      },
    }));
  };

  return (
    <div className="parameters-outer-warapper">
      <p>TF j</p>
      <div>
        <CustomSelect
          name="param1"
          onChange={(e) => handleSelectChange(e, "TFJ")}
          value={parameters?.[tabSelected]?.["TFJ"]?.["param1"]}
          option={[
            { label: "Not applicable", value: 1 },
            { label: "STS", value: 2 },
            { label: "Shuttle tanker", value: 3 },
          ]}
        />
        <div className="input-parameter-container">
          <span>TFj = </span>
          <CustomInput
            name="tfj"
            type="number"
            onChange={(e) => handleChange(e, "TFJ")}
            value={parameters?.[tabSelected]?.["TFJ"]?.["tfj"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
