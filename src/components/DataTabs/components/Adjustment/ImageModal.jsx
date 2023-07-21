import React, { useContext, useEffect } from "react";
import ModalImg from "../../../../assets/imagemodal.jpg";
import { CalculationContext } from "../../../../state management/ContextProvider";
import Checkbox from "../../../Input/Checkbox/Checkbox";

export default function ImageModal({ tabSelected, setImageModal }) {
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
    document.querySelector("main").style.overflow = "hidden";
    return () => (document.querySelector("main").style.overflow = "visible");
  }, []);

  return (
    <>
      <div className="image-modal-container">
        <div className="image-modal-wrapper">
          <div className="image-modal-checkbox-container">
            <span>Scenario</span>
            <span>
              <Checkbox
                name="method_1"
                value={true}
                checked={parameters?.[tabSelected]?.["TFJ"]?.["method_1"]}
                handleChange={(e) => {
                  handleCheckboxChange(e, "TFJ");
                  setImageModal(false);
                  handleCheckboxChange(
                    { target: { value: false, name: "method_2" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_3" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_4" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_5" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_6" } },
                    "TFJ"
                  );
                }}
              />
            </span>
            <span>
              <Checkbox
                name="method_2"
                value={true}
                checked={parameters?.[tabSelected]?.["TFJ"]?.["method_2"]}
                handleChange={(e) => {
                  handleCheckboxChange(e, "TFJ");
                  setImageModal(false);
                  handleCheckboxChange(
                    { target: { value: false, name: "method_1" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_3" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_4" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_5" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_6" } },
                    "TFJ"
                  );
                }}
              />
            </span>
            <span>
              <Checkbox
                name="method_3"
                value={true}
                checked={parameters?.[tabSelected]?.["TFJ"]?.["method_3"]}
                handleChange={(e) => {
                  handleCheckboxChange(e, "TFJ");
                  setImageModal(false);
                  handleCheckboxChange(
                    { target: { value: false, name: "method_1" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_2" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_4" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_5" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_6" } },
                    "TFJ"
                  );
                }}
              />
            </span>
            <span>
              <Checkbox
                name="method_4"
                value={true}
                checked={parameters?.[tabSelected]?.["TFJ"]?.["method_4"]}
                handleChange={(e) => {
                  handleCheckboxChange(e, "TFJ");
                  setImageModal(false);
                  handleCheckboxChange(
                    { target: { value: false, name: "method_1" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_2" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_3" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_5" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_6" } },
                    "TFJ"
                  );
                }}
              />
            </span>
            <span>
              <Checkbox
                name="method_5"
                value={true}
                checked={parameters?.[tabSelected]?.["TFJ"]?.["method_5"]}
                handleChange={(e) => {
                  handleCheckboxChange(e, "TFJ");
                  setImageModal(false);
                  handleCheckboxChange(
                    { target: { value: false, name: "method_1" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_2" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_3" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_4" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_6" } },
                    "TFJ"
                  );
                }}
              />
            </span>
            <span>
              <Checkbox
                name="method_6"
                value={true}
                checked={parameters?.[tabSelected]?.["TFJ"]?.["method_6"]}
                handleChange={(e) => {
                  handleCheckboxChange(e, "TFJ");
                  setImageModal(false);
                  handleCheckboxChange(
                    { target: { value: false, name: "method_1" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_2" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_3" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_4" } },
                    "TFJ"
                  );
                  handleCheckboxChange(
                    { target: { value: false, name: "method_5" } },
                    "TFJ"
                  );
                }}
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
