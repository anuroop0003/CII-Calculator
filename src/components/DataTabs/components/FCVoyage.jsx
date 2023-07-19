import React, { useEffect, useState } from "react";
import Checkbox from "../../Input/Checkbox/Checkbox";
import CustomInput from "../../Input/Input";

export default function FCVoyage({ tabSelected }) {
  const [fcVoyageValues, SetFCVoyageValues] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 1650,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  const handleChange = (e, key) => {
    SetFCVoyageValues((prev) => ({
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
  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
      SetFCVoyageValues((prev) => ({
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
      SetFCVoyageValues((prev) => ({
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
      <p>FC voyage j</p>
      <div>
        <Checkbox
          name="safe"
          value={true}
          checked={fcVoyageValues?.[tabSelected]?.["FC_Voyage"]?.["safe"]}
          handleChange={(e) => handleCheckboxChange(e, "FC_Voyage")}
          label="Endanger safe navigation of a ship"
        />
        <Checkbox
          name="ice"
          checked={fcVoyageValues?.[tabSelected]?.["FC_Voyage"]?.["ice"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FC_Voyage")}
          label="Sailing in ice conditions"
        />
        <div className="input-parameter-container">
          <span>FC voyage j = </span>
          <CustomInput
            type="number"
            name="fc_voyage"
            onChange={(e) => handleChange(e, "FC_Voyage")}
            value={fcVoyageValues?.[tabSelected]?.["FC_Voyage"]?.["fc_voyage"]}
            placeholder="Enter Value"
          />
        </div>
        <div className="input-parameter-container">
          <span>Dx = </span>
          <CustomInput
            type="number"
            name="dx"
            onChange={(e) => handleChange(e, "FC_Voyage")}
            value={fcVoyageValues?.[tabSelected]?.["FC_Voyage"]?.["dx"]}
            placeholder="Enter Value"
          />
        </div>
      </div>
    </div>
  );
}
