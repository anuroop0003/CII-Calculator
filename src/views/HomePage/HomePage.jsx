import { useState } from "react";
import CustomButton from "../../components/Button/Button";
import CustomInput from "../../components/Input/Input";
import CustomSelect from "../../components/Select/CustomSelect";
import "./homepage.css";

const HomePage = () => {
  const [selectYear, setSelectYear] = useState([]);
  const [fuelsCount, setFuelsCount] = useState([]);

  const years = [2019, 2020, 2021, 2022, 2023];
  const fuelsNumberOption = [
    { label: 1, value: ["1st"] },
    { label: 2, value: ["1st", "2nd"] },
    { label: 3, value: ["1st", "2nd", "3rd"] },
    { label: 4, value: ["1st", "2nd", "3rd", "4th"] },
  ];
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

  const handleYearSelect = (val) => {
    if (selectYear.includes(val)) {
      setSelectYear((prev) => prev.filter((item) => val !== item));
    } else {
      setSelectYear((prev) => [...prev, val]);
    }
  };

  const handleFuleNumberChange = (e) => {
    setFuelsCount(e.target.value.split(","));
  };

  return (
    <>
      <div className='personal-info-container'>
        <p className='personal-info-container-title'>Personal Information</p>
        <div className='personal-info-container-body flex-grid-container'>
          <CustomInput label={"Full Name"} />
          <CustomInput label={"Last Name"} />
        </div>
      </div>
      <div className='vessel-info-container'>
        <p className='vessel-info-container-title'>Vessel Information</p>
        <div className='vessel-info-container-body flex-grid-container'>
          <CustomInput label={"Vessel Name"} />
          <CustomInput label={"Gross Tonnage"} />
        </div>
        <div className='vessel-info-container-body flex-grid-container'>
          <CustomInput label={"Vessel Name"} />
          <CustomInput label={"Gross Tonnage"} />
        </div>
        <div className='vessel-info-container-body flex-grid-container'>
          <CustomInput label={"Ship Owner"} />
          <CustomInput label={"ISM Manager"} />
        </div>
        <div className='vessel-info-container-body flex-grid-container'>
          <CustomInput label={"Type of Vessel"} />
          <CustomInput label={"Deadweight at summer load line draught"} />
        </div>
        <div className='vessel-info-container-body flex-grid-container'>
          <CustomInput label={"IMO Number"} />
          <CustomInput label={"Year of built"} />
        </div>
      </div>
      <div className='distance-fuel-info-container'>
        <p className='distance-fuel-info-container-title'>Distance & Fuels</p>
        <div className='distance-fuel-info-container-body'>
          <p>Years to calculate</p>
          <div className='date-quick-select-container'>
            {years.map((item) => (
              <span style={{ backgroundColor: selectYear.includes(item) && "#4bb543" }} key={item} onClick={() => handleYearSelect(item)}>
                {item}
              </span>
            ))}
          </div>
          <CustomSelect onChange={handleFuleNumberChange} label={"Number of fuels used"} option={fuelsNumberOption} />
        </div>
        <div className='fuel-details-card-container'>
          {selectYear.map((item) => (
            <div key={item} className='fuel-details-card-body flex-grid-fuel-details'>
              <p className='fuel-details-card-title'>{item}</p>
              <div className='fuel-details-card-details '>
                {fuelsCount.map((item) => (
                  <>
                    <CustomSelect key={Math.random()} option={fuelTypeOptions} label={`${item} Type of Fuel`} />
                    <CustomInput key={Math.random()} label={`${item} Annual Fuel Consumption`} />
                  </>
                ))}
                <CustomInput label={"Annual Distance Travelled"} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='calculate-button-container'>
        <CustomButton label={"Calculate"} />
      </div>
    </>
  );
};

export default HomePage;
