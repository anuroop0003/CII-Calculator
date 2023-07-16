import { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import CustomInput from "../Input/Input";
import CustomSelect from "../Select/CustomSelect";
import "./customtable.css";

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme(
  "solarized",
  {
    text: {
      primary: "#DDE6ED",
      secondary: "#2aa198",
    },
    background: {
      default: "#002b36",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const fuelTypeOptions = [
  { value: "", label: "None" },
  { value: "Diesel/Gas Oil", label: "Diesel/Gas Oil" },
  { value: "LFO", label: "LFO" },
  { value: "HFO", label: "HFO" },
  { value: "LPG(Propane)", label: "LPG(Propane)" },
  { value: "LPG(Butane)", label: "LPG(Butane)" },
  { value: "LNG", label: "LNG" },
  { value: "Methanol", label: "Methanol" },
  { value: "Ethanol", label: "Ethanol" },
];

function CustomTable({ state }) {
  // console.log("state", state.numberoffuels);
  const [tableParameters, setTableParameters] = useState({});

  const data = [
    {
      title: "Type of Fuel",
      visible: "1",
      type: (
        <CustomSelect
          onChange={handleValueChange}
          name="fueltype1"
          option={fuelTypeOptions}
        />
      ),
    },
    {
      title: "Annual Fuel Consumption",
      visible: "1",
      type: (
        <CustomInput
          onChange={handleValueChange}
          name="fuelconsumption1"
          placeholder={`Annual Fuel Consumption`}
        />
      ),
    },
    {
      title: "Second Type of Fuel",
      visible: "2",
      type: (
        <CustomSelect
          onChange={handleValueChange}
          name="fueltype2"
          option={fuelTypeOptions}
        />
      ),
    },
    {
      title: "Second Annual Fuel Consumption",
      visible: "2",
      type: (
        <CustomInput
          name="fuelconsumption2"
          onChange={handleValueChange}
          placeholder={`Annual Fuel Consumption`}
        />
      ),
    },
    {
      title: "Third Type of Fuel",
      visible: "3",
      type: (
        <CustomSelect
          onChange={handleValueChange}
          name="fueltype3"
          option={fuelTypeOptions}
        />
      ),
    },
    {
      title: "Third Annual Fuel Consumption",
      visible: "3",
      type: (
        <CustomInput
          name="fuelconsumption3"
          onChange={handleValueChange}
          placeholder={`Annual Fuel Consumption`}
        />
      ),
    },
    {
      title: "Fourth Type of Fuel",
      visible: "4",
      type: (
        <CustomSelect
          onChange={handleValueChange}
          name="fueltype4"
          option={fuelTypeOptions}
        />
      ),
    },
    {
      title: "Fourth Annual Fuel Consumption",
      visible: "4",
      type: (
        <CustomInput
          name="fuelconsumption1"
          onChange={handleValueChange}
          placeholder={`Annual Fuel Consumption`}
        />
      ),
    },
    {
      title: "Fifth Type of Fuel",
      visible: "5",
      type: (
        <CustomSelect
          onChange={handleValueChange}
          name="fueltype5"
          option={fuelTypeOptions}
        />
      ),
    },
    {
      title: "Fifth Annual Fuel Consumption",
      visible: "5",
      type: (
        <CustomInput
          name="fuelconsumption1"
          onChange={handleValueChange}
          placeholder={`Annual Fuel Consumption`}
        />
      ),
    },
    {
      title: "Annual Distance Travelled",
      type: (
        <CustomInput
          name="annualdistance"
          onChange={handleValueChange}
          placeholder={`Annual Distance Travelled`}
        />
      ),
    },
  ].filter((e) => {
    if (e.visible) {
      if (e.visible <= state.numberoffuels) {
        return true;
      }
    } else return true;
  });

  let columns = [];
  state.numberofyears.forEach((item) =>
    columns.push({
      name: item,
      selector: (row) => row.type,
      style: (row) => ({ backgroundColor: "green" }),
    })
  );
  columns.unshift({
    name: "Year",
    selector: (row) => row.title,
    style: (row) => ({ backgroundColor: "green" }),
  });

  function handleValueChange(e) {
    setTableParameters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <DataTable
      theme="solarized"
      className="table"
      columns={columns}
      data={data}
    />
  );
}

export default CustomTable;
