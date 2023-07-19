import { useState } from "react";
import Checkbox from "../../Input/Checkbox/Checkbox";
import CustomInput from "../../Input/Input";

const FCElectrical = ({ tabSelected }) => {
  const [fcElectrical, setFCElectrical] = useState({});
  const handleChange = (e, key) => {
    setFCElectrical((prev) => ({
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
      setFCElectrical((prev) => ({
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
      setFCElectrical((prev) => ({
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
          checked={fcElectrical?.[tabSelected]?.["FCE"]?.["param1"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Refrigerated containers"
        />
        {fcElectrical?.[tabSelected]?.["FCE"]?.["param1"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="param11"
              checked={fcElectrical?.[tabSelected]?.["FCE"]?.["param11"]}
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
            {fcElectrical?.[tabSelected]?.["FCE"]?.["param11"] &&
              fcElectrical?.[tabSelected]?.["FCE"]?.["param1"] && (
                <div style={{ marginLeft: "80px" }}>
                  <div className="input-parameter-container">
                    <span>Reefer kWh = </span>
                    <CustomInput
                      type="number"
                      name="reefer_kwh"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={
                        fcElectrical?.[tabSelected]?.["FCE"]?.["reefer_kwh"]
                      }
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="input-parameter-container">
                    <span>SFOC = </span>
                    <CustomInput
                      type="number"
                      name="sfoc1"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={fcElectrical?.[tabSelected]?.["FCE"]?.["sfoc1"]}
                      placeholder="Enter Value"
                    />
                  </div>
                </div>
              )}
          </div>
        )}
        {fcElectrical?.[tabSelected]?.["FCE"]?.["param1"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="param12"
              checked={fcElectrical?.[tabSelected]?.["FCE"]?.["param12"]}
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
            {fcElectrical?.[tabSelected]?.["FCE"]?.["param12"] &&
              fcElectrical?.[tabSelected]?.["FCE"]?.["param1"] && (
                <div style={{ marginLeft: "80px" }}>
                  <div className="input-parameter-container">
                    <span>SFOC avg = </span>
                    <CustomInput
                      name="sfoc_avg"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={fcElectrical?.[tabSelected]?.["FCE"]?.["sfoc_avg"]}
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
                        fcElectrical?.[tabSelected]?.["FCE"]?.[
                          "reefer_days_sea"
                        ]
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
                        fcElectrical?.[tabSelected]?.["FCE"]?.["noc_arrival"]
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
                      value={
                        fcElectrical?.[tabSelected]?.["FCE"]?.["noc_depart"]
                      }
                      placeholder="Enter Value"
                    />
                  </div>
                  <div className="input-parameter-container">
                    <span>Daysport = </span>
                    <CustomInput
                      type="number"
                      name="days_port"
                      onChange={(e) => handleChange(e, "FCE")}
                      value={
                        fcElectrical?.[tabSelected]?.["FCE"]?.["days_port"]
                      }
                      placeholder="Enter Value"
                    />
                  </div>
                </div>
              )}
          </div>
        )}
        <Checkbox
          name="param2"
          checked={fcElectrical?.[tabSelected]?.["FCE"]?.["param2"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Cargo cooling systems on gas carriers and LNG carriers"
        />
        {fcElectrical?.[tabSelected]?.["FCE"]?.["param2"] && (
          <div style={{ marginLeft: "40px" }}>
            <div className="input-parameter-container">
              <span>Cooling kWh = </span>
              <CustomInput
                type="number"
                name="cooling_kwh"
                onChange={(e) => handleChange(e, "FCE")}
                value={fcElectrical?.[tabSelected]?.["FCE"]?.["cooling_kwh"]}
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
                value={fcElectrical?.[tabSelected]?.["FCE"]?.["sfoc2"]}
                placeholder="Enter Value"
              />
            </div>
          </div>
        )}
        <Checkbox
          name="param3"
          checked={fcElectrical?.[tabSelected]?.["FCE"]?.["param3"]}
          value={true}
          handleChange={(e) => handleCheckboxChange(e, "FCE")}
          label="Electrical cargo discharge pumps on tankers"
        />
        {fcElectrical?.[tabSelected]?.["FCE"]?.["param3"] && (
          <div style={{ marginLeft: "40px" }}>
            <div className="input-parameter-container">
              <span>Discharge kWh = </span>
              <CustomInput
                type="number"
                inputmode="numeric"
                name="discharge_kwh"
                onChange={(e) => handleChange(e, "FCE")}
                value={fcElectrical?.[tabSelected]?.["FCE"]?.["discharge_kwh"]}
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
                value={fcElectrical?.[tabSelected]?.["FCE"]?.["sfoc3"]}
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
