import { useContext } from "react";
import { fuelTypes } from "../../../data/fuelTypes";
import { CalculationContext } from "../../../state management/ContextProvider";
import CustomInput from "../../Input/Input";
import CustomSelect from "../../Select/CustomSelect";

export default function FuelTypes({ tabSelected, state }) {
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
    <>
      <div className="parameters-container" id="container8">
        {Number(state.numberoffuels) >= 1 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">1st Type of Fuel</div>
              <CustomSelect
                option={fuelTypes}
                name="fueltype1"
                onChange={(e) => handleSelectChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype1"]}
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">1st Annual Fuel Consumption</div>
              <CustomInput
                type="number"
                name="fuelconsumption1"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  parameters?.[tabSelected]?.["fuelData"]?.["fuelconsumption1"]
                }
              />
            </div>
            {parameters?.[tabSelected]?.["fuelData"]?.["fueltype1"] ===
              "other" && (
              <div className="fuel-section-child">
                <div className="title-div">CF</div>
                <CustomInput
                  type="number"
                  name="cf1"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={parameters?.[tabSelected]?.["fuelData"]?.["cf1"]}
                  placeholder="Enter Value"
                />
              </div>
            )}
          </div>
        )}
        {Number(state.numberoffuels) >= 2 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">2nd Type of Fuel</div>
              <CustomSelect
                option={fuelTypes}
                name="fueltype2"
                onChange={(e) => handleSelectChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype2"]}
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">2nd Annual Fuel Consumption</div>
              <CustomInput
                type="number"
                name="fuelconsumption2"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  parameters?.[tabSelected]?.["fuelData"]?.["fuelconsumption2"]
                }
              />
            </div>
            {parameters?.[tabSelected]?.["fuelData"]?.["fueltype2"] ===
              "other" && (
              <div className="fuel-section-child">
                <div className="title-div">CF</div>
                <CustomInput
                  type="number"
                  name="cf2"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={parameters?.[tabSelected]?.["fuelData"]?.["cf2"]}
                  placeholder="Enter Value"
                />
              </div>
            )}
          </div>
        )}

        {Number(state.numberoffuels) >= 3 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">3rd Type of Fuel</div>
              <CustomSelect
                option={fuelTypes}
                name="fueltype3"
                onChange={(e) => handleSelectChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype3"]}
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">3rd Annual Fuel Consumption</div>
              <CustomInput
                type="number"
                name="fuelconsumption3"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  parameters?.[tabSelected]?.["fuelData"]?.["fuelconsumption3"]
                }
              />
            </div>
            {parameters?.[tabSelected]?.["fuelData"]?.["fueltype3"] ===
              "other" && (
              <div className="fuel-section-child">
                <div className="title-div">CF</div>
                <CustomInput
                  type="number"
                  name="cf3"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={parameters?.[tabSelected]?.["fuelData"]?.["cf3"]}
                  placeholder="Enter Value"
                />
              </div>
            )}
          </div>
        )}

        {Number(state.numberoffuels) >= 4 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">4th Type of Fuel</div>
              <CustomSelect
                option={fuelTypes}
                name="fueltype4"
                onChange={(e) => handleSelectChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype4"]}
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">4th Annual Fuel Consumption</div>
              <CustomInput
                type="number"
                name="fuelconsumption4"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  parameters?.[tabSelected]?.["fuelData"]?.["fuelconsumption4"]
                }
              />
            </div>
            {parameters?.[tabSelected]?.["fuelData"]?.["fueltype4"] ===
              "other" && (
              <div className="fuel-section-child">
                <div className="title-div">CF</div>
                <CustomInput
                  type="number"
                  name="cf4"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={parameters?.[tabSelected]?.["fuelData"]?.["cf4"]}
                  placeholder="Enter Value"
                />
              </div>
            )}
          </div>
        )}

        {Number(state.numberoffuels) >= 5 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">5th Type of Fuel</div>
              <CustomSelect
                option={fuelTypes}
                name="fueltype5"
                onChange={(e) => handleSelectChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype5"]}
              />
            </div>
            <div className="fuel-section-child">
              <div className="title-div">5th Annual Fuel Consumption</div>
              <CustomInput
                type="number"
                name="fuelconsumption5"
                placeholder="Enter Value"
                onChange={(e) => handleChange(e, "fuelData")}
                value={
                  parameters?.[tabSelected]?.["fuelData"]?.["fuelconsumption5"]
                }
              />
            </div>
            {parameters?.[tabSelected]?.["fuelData"]?.["fueltype5"] ===
              "other" && (
              <div className="fuel-section-child">
                <div className="title-div">CF</div>
                <CustomInput
                  type="number"
                  name="cf5"
                  onChange={(e) => handleChange(e, "fuelData")}
                  value={parameters?.[tabSelected]?.["fuelData"]?.["cf5"]}
                  placeholder="Enter Value"
                />
              </div>
            )}
          </div>
        )}

        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">Annual Distance Travelled</div>
            <CustomInput
              type="number"
              name="annualdistance"
              onChange={(e) => handleChange(e, "fuelData")}
              value={
                parameters?.[tabSelected]?.["fuelData"]?.["annualdistance"]
              }
              placeholder="Enter Value"
            />
          </div>
        </div>
      </div>
    </>
  );
}
