import React, { useContext, useEffect } from "react";
import ModalImg from "../../assets/imagemodal.jpg";
import { CalculationContext } from "../../state management/ContextProvider";
import Checkbox from "../Input/Checkbox/Checkbox";

export default function ImageModal({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);

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

  useEffect(() => {
    // document.querySelector("main").style.overflow = "hidden";
    // return () => (document.querySelector("main").style.overflow = "visible");
  }, []);

  return (
    <>
      <div className="image-modal-container">
        <div className="image-modal-wrapper">
          <div className="image-modal-checkbox-container">
            <span>Scenario</span>
            <span>
              <Checkbox
                name="EEPI"
                value={true}
                checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"]}
                handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
              />
            </span>
            <span>
              <Checkbox
                name="EEPI"
                value={true}
                checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"]}
                handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
              />
            </span>
            <span>
              <Checkbox
                name="EEPI"
                value={true}
                checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"]}
                handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
              />
            </span>
            <span>
              <Checkbox
                name="EEPI"
                value={true}
                checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"]}
                handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
              />
            </span>
            <span>
              <Checkbox
                name="EEPI"
                value={true}
                checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"]}
                handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
              />
            </span>
            <span>
              <Checkbox
                name="EEPI"
                value={true}
                checked={parameters?.[tabSelected]?.["Vol_Types"]?.["EEPI"]}
                handleChange={(e) => handleCheckboxChange(e, "Vol_Types")}
              />
            </span>
          </div>
          <div className="image-modal-image-container">
            <span>Explanation</span>
            <img src={ModalImg} />
          </div>
        </div>
      </div>
      <div className="image-modal-backdrop"></div>
    </>
  );
}
