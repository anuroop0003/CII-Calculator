import React, { useState } from "react";
import CustomInput from "../../Input/Input";

export default function FuelTypes({ tabSelected, state }) {
  const [fuelTypesValues, setFuelTypesValues] = useState({});
  const handleChange = (e, key) => {
    setFuelTypesValues((prev) => ({
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
    <>
      <div className="parameters-container">
        {Number(state.numberoffuels) >= 1 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">1st Type of Fuel</div>
              <CustomInput
                name="fueltype1"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.["fueltype1"]
                }
                placeholder="Enter Value"
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">1st Annual Fuel Consumption</div>
              <CustomInput
                name="fuelconsumption1"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.[
                    "fuelconsumption1"
                  ]
                }
              />
            </div>
          </div>
        )}
        {Number(state.numberoffuels) >= 2 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">2nd Type of Fuel</div>
              <CustomInput
                name="fueltype2"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.["fueltype2"]
                }
                placeholder="Enter Value"
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">2nd Annual Fuel Consumption</div>
              <CustomInput
                name="fuelconsumption2"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.[
                    "fuelconsumption2"
                  ]
                }
              />
            </div>
          </div>
        )}

        {Number(state.numberoffuels) >= 3 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">3rd Type of Fuel</div>
              <CustomInput
                name="fueltype3"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.["fueltype3"]
                }
                placeholder="Enter Value"
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">3rd Annual Fuel Consumption</div>
              <CustomInput
                name="fuelconsumption3"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.[
                    "fuelconsumption3"
                  ]
                }
              />
            </div>
          </div>
        )}

        {Number(state.numberoffuels) >= 4 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">4th Type of Fuel</div>
              <CustomInput
                name="fueltype4"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.["fueltype4"]
                }
                placeholder="Enter Value"
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">4th Annual Fuel Consumption</div>
              <CustomInput
                name="fuelconsumption4"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.[
                    "fuelconsumption4"
                  ]
                }
              />
            </div>
          </div>
        )}

        {Number(state.numberoffuels) >= 5 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">5th Type of Fuel</div>
              <CustomInput
                name="fueltype5"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.["fueltype5"]
                }
                placeholder="Enter Value"
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">5th Annual Fuel Consumption</div>
              <CustomInput
                name="fuelconsumption5"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  fuelTypesValues?.[tabSelected]?.["fuelData"]?.[
                    "fuelconsumption5"
                  ]
                }
              />
            </div>
          </div>
        )}

        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">Annual Distance Travelled</div>
            <CustomInput
              name="anuualdistance"
              onChange={(e) => handleChange(e, "fuelData")}
              value={
                fuelTypesValues?.[tabSelected]?.["fuelData"]?.["anuualdistance"]
              }
              placeholder="Enter Value"
            />
          </div>
        </div>
      </div>
    </>
  );
}
