import { useContext, useEffect, useState } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import Checkbox from "../../../Input/Checkbox/Checkbox";
import CustomInput from "../../../Input/Input";
import ImageModal from "./ImageModal";

export default function TFJ({ tabSelected }) {
  const { parameters, setParameters } = useContext(CalculationContext);
  const [showImageModal, setImageModal] = useState(false);

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
    <div className="parameters-outer-warapper">
      <p>TF j</p>
      <div>
        <Checkbox
          name="param1"
          value={true}
          checked={parameters?.[tabSelected]?.["TFJ"]?.["param1"]}
          handleChange={(e) => {
            handleCheckboxChange(e, "TFJ");
            handleCheckboxChange(
              { target: { value: false, name: "param2" } },
              "TFJ"
            );
          }}
          label="STS corrections"
        />
        {parameters?.[tabSelected]?.["TFJ"]?.["param1"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="param11"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["param11"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "param12" } },
                  "TFJ"
                );
                // !parameters?.[tabSelected]?.["TFJ"]?.["param11"] &&
                //   setImageModal(true);
              }}
              label="Cargo oil transfer from a vessel’s cargo tank to another vessel’s cargo tank."
            />
            {parameters?.[tabSelected]?.["TFJ"]?.["param1"] &&
              parameters?.[tabSelected]?.["TFJ"]?.["param11"] && (
                <div className="input-parameter-container">
                  <span>FC s j = </span>
                  <CustomInput
                    type="number"
                    name="fcs_j"
                    onChange={(e) => handleChange(e, "TFJ")}
                    value={parameters?.[tabSelected]?.["TFJ"]?.["fcs_j"]}
                    placeholder="Enter Value"
                  />
                </div>
              )}
            <Checkbox
              name="param12"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["param12"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "param11" } },
                  "TFJ"
                );
              }}
              label="Bunker operation, oil transfer from a vessel’s cargo tank to another vessel’s bunker tank."
            />
          </div>
        )}
        <Checkbox
          name="param2"
          value={true}
          checked={parameters?.[tabSelected]?.["TFJ"]?.["param2"]}
          handleChange={(e) => {
            handleCheckboxChange(e, "TFJ");
            handleCheckboxChange(
              { target: { value: false, name: "param1" } },
              "TFJ"
            );
          }}
          label="Shutle Tankers correction"
        />
        {parameters?.[tabSelected]?.["TFJ"]?.["param2"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="param21"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["param21"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "param22" } },
                  "TFJ"
                );
              }}
              label="Tankers (shutle tankers) equipped with dynamic positioning."
            />
            <Checkbox
              name="param22"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["param22"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "param21" } },
                  "TFJ"
                );
              }}
              label="Capable of loading crude oil at offshore installations."
            />
          </div>
        )}
        {showImageModal && (
          <ImageModal tabSelected={tabSelected} setImageModal={setImageModal} />
        )}
      </div>
    </div>
  );
}
