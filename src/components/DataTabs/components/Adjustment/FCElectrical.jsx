import { useContext, useEffect } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import Checkbox from "../../../Input/Checkbox/Checkbox";
import CustomInput from "../../../Input/Input";

const FCElectrical = ({ tabSelected }) => {
  const { parameters, setParameters } = useContext(CalculationContext);

  useEffect(() => {
    var offsetHeightMain = document?.getElementById("main")?.offsetHeight;
    var offsetHeight1 = document?.getElementById("container9")?.offsetHeight;
    var offsetHeight2 = document?.getElementById("container10")?.offsetHeight;
    var offsetHeight3 = document?.getElementById("container11")?.offsetHeight;
    window.scrollTo({
      top:
        offsetHeightMain - (offsetHeight1 + offsetHeight2 + offsetHeight3 + 40),
      left: 100,
      behavior: "smooth",
    });
  }, []);

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
  const handleCheckboxChange = (e, key) => {
    if (e.target.checked) {
      setParameters((prev) => ({
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
      setParameters((prev) => ({
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
      <p>FC electrical j</p>
      <div>
        <Checkbox
          name="param1"
          checked={parameters?.[tabSelected]?.["FCE"]?.["param1"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Refrigerated containers"
        />
        {parameters?.[tabSelected]?.["FCE"]?.["param1"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="param11"
              checked={parameters?.[tabSelected]?.["FCE"]?.["param11"]}
              value={true}
              handleChange={(e) => {
                handleCheckboxChange(e, "FCE");
                handleCheckboxChange(
                  { target: { value: false, name: "param12" } },
                  "FCE"
                );
              }}
              label="For ships that have ability to monitor reefer electrical consumption, the ship may calculate the reefer container kWh consumption as follows:"
            />
            {parameters?.[tabSelected]?.["FCE"]?.["param11"] &&
              parameters?.[tabSelected]?.["FCE"]?.["param1"] && (
                <div style={{ marginLeft: "80px" }}>
                  <div className="input-parameter-container">
                    <span>Reefer kWh = </span>
                    <CustomInput
                      type="number"
                      name="reefer_kwh"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={parameters?.[tabSelected]?.["FCE"]?.["reefer_kwh"]}
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="input-parameter-container">
                    <span>SFOC = </span>
                    <CustomInput
                      type="number"
                      name="sfoc1"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={parameters?.[tabSelected]?.["FCE"]?.["sfoc1"]}
                      placeholder="Enter Value"
                    />
                  </div>
                </div>
              )}
          </div>
        )}
        {parameters?.[tabSelected]?.["FCE"]?.["param1"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="param12"
              checked={parameters?.[tabSelected]?.["FCE"]?.["param12"]}
              value={true}
              handleChange={(e) => {
                handleCheckboxChange(e, "FCE");
                handleCheckboxChange(
                  { target: { value: false, name: "param11" } },
                  "FCE"
                );
              }}
              label="For ships that do not have ability to monitor reefer electrical consumption, the ship may calculate the reefer container kWh consumption as follows:"
            />
            {parameters?.[tabSelected]?.["FCE"]?.["param12"] &&
              parameters?.[tabSelected]?.["FCE"]?.["param1"] && (
                <div style={{ marginLeft: "80px" }}>
                  <div className="input-parameter-container">
                    <span>SFOC avg = </span>
                    <CustomInput
                      name="sfoc_avg"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={parameters?.[tabSelected]?.["FCE"]?.["sfoc_avg"]}
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="input-parameter-container">
                    <span>Reefer days sea = </span>
                    <CustomInput
                      type="number"
                      name="reefer_days_sea"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={
                        parameters?.[tabSelected]?.["FCE"]?.["reefer_days_sea"]
                      }
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="input-parameter-container">
                    <span>NOC Arrival = </span>
                    <CustomInput
                      type="number"
                      name="noc_arrival"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={
                        parameters?.[tabSelected]?.["FCE"]?.["noc_arrival"]
                      }
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="input-parameter-container">
                    <span>NOC Departure = </span>
                    <CustomInput
                      type="number"
                      name="noc_depart"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={parameters?.[tabSelected]?.["FCE"]?.["noc_depart"]}
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="input-parameter-container">
                    <span>Daysport = </span>
                    <CustomInput
                      type="number"
                      name="days_port"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={parameters?.[tabSelected]?.["FCE"]?.["days_port"]}
                      placeholder="Enter Value"
                    />
                  </div>
                </div>
              )}
          </div>
        )}
        <Checkbox
          name="param2"
          checked={parameters?.[tabSelected]?.["FCE"]?.["param2"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Cargo cooling systems on gas carriers and LNG carriers"
        />
        {parameters?.[tabSelected]?.["FCE"]?.["param2"] && (
          <div style={{ marginLeft: "40px" }}>
            <div className="input-parameter-container">
              <span>Cooling kWh = </span>
              <CustomInput
                type="number"
                name="cooling_kwh"
                onChange={(e) => handleChange(e, "FCE")}
                value={parameters?.[tabSelected]?.["FCE"]?.["cooling_kwh"]}
                placeholder="Enter Value"
              />
            </div>
            <div className="input-parameter-container">
              <span>SFOC = </span>
              <CustomInput
                type="number"
                inputmode="numeric"
                name="sfoc2"
                onChange={(e) => handleChange(e, "FCE")}
                value={parameters?.[tabSelected]?.["FCE"]?.["sfoc2"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
        )}
        <Checkbox
          name="param3"
          checked={parameters?.[tabSelected]?.["FCE"]?.["param3"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Electrical cargo discharge pumps on tankers"
        />
        {parameters?.[tabSelected]?.["FCE"]?.["param3"] && (
          <div style={{ marginLeft: "40px" }}>
            <div className="input-parameter-container">
              <span>Discharge kWh = </span>
              <CustomInput
                type="number"
                inputmode="numeric"
                name="discharge_kwh"
                onChange={(e) => handleChange(e, "FCE")}
                value={parameters?.[tabSelected]?.["FCE"]?.["discharge_kwh"]}
                placeholder="Enter Value"
              />
            </div>
            <div className="input-parameter-container">
              <span>SFOC = </span>
              <CustomInput
                type="number"
                inputmode="numeric"
                name="sfoc3"
                onChange={(e) => handleChange(e, "FCE")}
                value={parameters?.[tabSelected]?.["FCE"]?.["sfoc3"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FCElectrical;
