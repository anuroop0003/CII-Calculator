import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomInput from "../Input/Input";
import CustomSelect from "../Select/CustomSelect";
import "./customtable.css";

const CustomTable = ({ data }) => {
  const {
    deadweight,
    email,
    grossTonnage,
    ismmanager,
    imonumber,
    name,
    numberoffuels,
    numberofyears,
    shipowner,
    typeofvessel,
    vesselname,
    yearofbuild,
  } = data;
  //   console.log(data);

  const [tableParameters, setTableParameters] = useState({});

  function iterateAnnualFuelConsumption() {
    const handleOnchange = (item, e, i) => {
      //   console.log({ [item]: e.target.value });
      setTableParameters((prev) => ({
        ...prev,
        [`fuelconsumption${i}`]: {
          ...prev[`fuelconsumption${i}`],
          [item]: e.target.value,
        },
      }));
    };
    const length = Number(numberoffuels);
    const temp = [];
    for (let i = 1; i <= length; i++) {
      temp.push(
        <tr key={uuidv4()}>
          <td>Annual Fuel Consumption {i}</td>
          {numberofyears.map((item) => (
            <td key={uuidv4()}>
              <CustomInput
                value={tableParameters?.[`fuelconsumption${i}`]?.[item]}
                onChange={(e) => handleOnchange(item, e, i)}
              />
            </td>
          ))}
        </tr>
      );
    }
    return temp;
  }

  function iterateFuelType() {
    const handleOnchange = (item, e, i) => {
      //   console.log({ [item]: e.target.value });
      //   console.log(i);
      setTableParameters((prev) => ({
        ...prev,
        [`fueltype${i}`]: { ...prev[`fueltype${i}`], [item]: e.target.value },
      }));
    };
    const length = Number(numberoffuels);
    const temp = [];
    for (let i = 1; i <= length; i++) {
      temp.push(
        <tr key={uuidv4()}>
          <td>Type of Fuel {i}</td>
          {numberofyears.map((item) => (
            <td key={uuidv4()}>
              <CustomSelect
                value={tableParameters?.[`fueltype${i}`]?.[item]}
                onChange={(e) => handleOnchange(item, e, i)}
                option={fuelTypeOptions}
              />
            </td>
          ))}
        </tr>
      );
    }
    return temp;
  }

  function iterateAnnualDistanceTravelled() {
    function handleOnchange(item, e, i) {
      setTableParameters((prev) => ({
        ...prev,
        annualdistance: { ...prev.annualdistance, [item]: e.target.value },
      }));
    }
    return (
      <tr>
        <td>Annual Distance Travelled</td>
        {numberofyears.map((item) => (
          <td key={uuidv4()}>
            {console.log("123456", tableParameters?.annualdistance?.[item])}
            <CustomInput
              value={tableParameters?.annualdistance?.[item] ?? ""}
              onChange={(e) => handleOnchange(item, e)}
            />
          </td>
        ))}
      </tr>
    );
  }
  const fuelTypeOptions = [
    { value: "Diesel/Gas Oil", label: "Diesel/Gas Oil" },
    { value: "LFO", label: "LFO" },
    { value: "HFO", label: "HFO" },
    { value: "LPG(Propane)", label: "LPG(Propane)" },
    { value: "LPG(Butane)", label: "LPG(Butane)" },
    { value: "LNG", label: "LNG" },
    { value: "Methanol", label: "Methanol" },
    { value: "Ethanol", label: "Ethanol" },
  ];

  console.log(tableParameters);
  return (
    <table className="custom-table-container">
      {/* {console.log(values)} */}
      <thead className="custom-table-thead">
        <tr>
          <th>Year</th>
          {numberofyears.map((item) => (
            <th key={uuidv4()}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody className="custom-table-tbody">
        {iterateFuelType()}
        {iterateAnnualFuelConsumption()}
        {iterateAnnualDistanceTravelled()}
      </tbody>
    </table>
  );
};

export default CustomTable;
