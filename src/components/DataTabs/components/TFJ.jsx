import React, { useEffect, useState } from "react";
import CustomInput from "../../Input/Input";
import CustomSelect from "../../Select/CustomSelect";

export default function TFJ({ tabSelected }) {
  const [tfjValues, setTFJValues] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 1650,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  const handleChange = (e, key) => {
    setTFJValues((prev) => ({
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
  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
      setTFJValues((prev) => ({
        ...prev,
        [tabSelected]: {
          ...prev[tabSelected],
          [key]: {
            ...prev?.[tabSelected]?.[key],
            [e.target.name]: e.target.value,
          },
        },
      }));
    } else {
      setTFJValues((prev) => ({
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
      <p>TF j</p>
      <div>
        <CustomSelect
          name="param1"
          onChange={(e) => handleChange(e, "TFJ")}
          value={tfjValues?.[tabSelected]?.["TFJ"]?.["param1"]}
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
            onChange={(e) => handleChange(e, "TFJ")}
            value={tfjValues?.[tabSelected]?.["TFJ"]?.["tfj"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
