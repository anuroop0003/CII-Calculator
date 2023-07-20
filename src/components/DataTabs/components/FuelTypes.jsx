import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";
import CustomInput from "../../Input/Input";

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
  return (
    <>
      <div className="parameters-container">
        {Number(state.numberoffuels) >= 1 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">1st Type of Fuel</div>
              <CustomInput
                name="fueltype1"
                type="number"
                onChange={(e) => handleChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype1"]}
                placeholder="Enter Value"
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
          </div>
        )}
        {Number(state.numberoffuels) >= 2 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">2nd Type of Fuel</div>
              <CustomInput
                type="number"
                name="fueltype2"
                onChange={(e) => handleChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype2"]}
                placeholder="Enter Value"
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
          </div>
        )}

        {Number(state.numberoffuels) >= 3 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">3rd Type of Fuel</div>
              <CustomInput
                type="number"
                name="fueltype3"
                onChange={(e) => handleChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype3"]}
                placeholder="Enter Value"
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
          </div>
        )}

        {Number(state.numberoffuels) >= 4 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">4th Type of Fuel</div>
              <CustomInput
                type="number"
                name="fueltype4"
                onChange={(e) => handleChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype4"]}
                placeholder="Enter Value"
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
          </div>
        )}

        {Number(state.numberoffuels) >= 5 && (
          <div className="fuel-section-container">
            <div className="fuel-section-child">
              <div className="title-div">5th Type of Fuel</div>
              <CustomInput
                type="number"
                name="fueltype5"
                onChange={(e) => handleChange(e, "fuelData")}
                value={parameters?.[tabSelected]?.["fuelData"]?.["fueltype5"]}
                placeholder="Enter Value"
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
          </div>
        )}

        <div className="fuel-section-container">
          <div className="fuel-section-child">
            <div className="title-div">Annual Distance Travelled</div>
            <CustomInput
              type="number"
              name="anuualdistance"
              onChange={(e) => handleChange(e, "fuelData")}
              value={
                parameters?.[tabSelected]?.["fuelData"]?.["anuualdistance"]
              }
              placeholder="Enter Value"
            />
          </div>
        </div>
      </div>
    </>
  );
}
