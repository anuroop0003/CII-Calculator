import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import CustomInput from "../Input/Input";
import CustomSelect from "../Select/CustomSelect";
import "./customtable.css";

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme(
  "solarized",
  {
    text: {
      primary: "black",
      secondary: "black",
    },
    background: {
      default: "#DDE6ED",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "black",
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
  const [tableParameters, setTableParameters] = useState({});
  useEffect(() => {
    window.scrollTo(0, 1100);
  }, []);

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
    {
      title: "CF (t-CO2/t-Fuel)",
      type: state["CF"],
    },
    {
      title: "FC (voyage j)",
      type: (
        <CustomInput
          name="FC_voyage"
          onChange={handleValueChange}
          placeholder={"FC Voyage"}
        />
      ),
    },
    {
      title: "FC (electrical j)",
      type: (
        <CustomInput
          name="FC_electrical"
          onChange={handleValueChange}
          placeholder={"FC Electrical"}
        />
      ),
    },
    {
      title: "FC (Boiler j)",
      type: (
        <CustomInput
          name="FC_boiler"
          onChange={handleValueChange}
          placeholder={"FC Boiler"}
        />
      ),
    },
    {
      title: "FC (others j)",
      type: (
        <CustomInput
          name="FC_other"
          onChange={handleValueChange}
          placeholder={"FC Others"}
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

  const colors = [
    "#ADD8E6",
    "#FF7F50",
    "#FFB6C1",
    "#FFFACD",
    "#E6E6FA",
    "#FFDAB9",
    "#D3D3D3",
    "#008080",
    "#D2B48C",
    "#00FFFF",
  ];

  let columns = [];
  state.numberofyears.forEach((item, i) =>
    columns.push({
      name: item,
      selector: (row) => row.type,
      style: (row) => ({ backgroundColor: colors[i], textAlign: "right" }),
    })
  );
  columns.unshift({
    name: "Year",
    selector: (row) => row.title,
    style: (row) => ({ backgroundColor: "#DDE6ED" }),
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
