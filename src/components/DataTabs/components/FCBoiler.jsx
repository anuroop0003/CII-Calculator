import { useState } from "react";
import Checkbox from "../../Input/Checkbox/Checkbox";

export default function FCBoiler({ tabSelected }) {
  const [fcBoiler, setFCBoiler] = useState({});
  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
      setFCBoiler((prev) => ({
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
      setFCBoiler((prev) => ({
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
  console.log("fcBoiler", fcBoiler);
  return (
    <div className="parameters-outer-warapper">
      <p>FC boiler j</p>
      <div>
        <Checkbox
          name="param1"
          checked={fcBoiler?.[tabSelected]?.["FCE"]?.["param1"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Boilers used for cargo heating"
        />
        <Checkbox
          name="param2"
          checked={fcBoiler?.[tabSelected]?.["FCE"]?.["param2"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Tankers which use steam driven cargo pumps"
        />
      </div>
    </div>
  );
}
