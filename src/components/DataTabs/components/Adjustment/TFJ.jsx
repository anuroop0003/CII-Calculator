import { useContext, useEffect, useState } from "react";
import { CalculationContext } from "../../../../state management/ContextProvider";
import Checkbox from "../../../Input/Checkbox/Checkbox";
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

  return (
    <div className="parameters-outer-warapper">
      <p>TF j</p>
      <div>
        <Checkbox
          name="sts_corr"
          value={true}
          checked={parameters?.[tabSelected]?.["TFJ"]?.["sts_corr"]}
          handleChange={(e) => {
            handleCheckboxChange(e, "TFJ");
            handleCheckboxChange(
              { target: { value: false, name: "st_corr" } },
              "TFJ"
            );
          }}
          label="STS corrections"
        />
        {parameters?.[tabSelected]?.["TFJ"]?.["sts_corr"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="cargo"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["cargo"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "bunker" } },
                  "TFJ"
                );
                !parameters?.[tabSelected]?.["TFJ"]?.["cargo"] &&
                  setImageModal(true);
              }}
              label="Cargo oil transfer from a vessel’s cargo tank to another vessel’s cargo tank."
            />
            <Checkbox
              name="bunker"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["bunker"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "cargo" } },
                  "TFJ"
                );
              }}
              label="Bunker operation, oil transfer from a vessel’s cargo tank to another vessel’s bunker tank."
            />
          </div>
        )}
        <Checkbox
          name="st_corr"
          value={true}
          checked={parameters?.[tabSelected]?.["TFJ"]?.["st_corr"]}
          handleChange={(e) => {
            handleCheckboxChange(e, "TFJ");
            handleCheckboxChange(
              { target: { value: false, name: "sts_corr" } },
              "TFJ"
            );
          }}
          label="Shutle Tankers correction"
        />
        {parameters?.[tabSelected]?.["TFJ"]?.["st_corr"] && (
          <div style={{ marginLeft: "40px" }}>
            <Checkbox
              name="tankers"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["tankers"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "capable" } },
                  "TFJ"
                );
              }}
              label="Tankers (shutle tankers) equipped with dynamic positioning."
            />
            <Checkbox
              name="capable"
              value={true}
              checked={parameters?.[tabSelected]?.["TFJ"]?.["capable"]}
              handleChange={(e) => {
                handleCheckboxChange(e, "TFJ");
                handleCheckboxChange(
                  { target: { value: false, name: "tankers" } },
                  "TFJ"
                );
              }}
              label="Capable of loading crude oil at offshore installations."
            />
          </div>
        )}
        {/* <div className="input-parameter-container">
          <span>TFj = </span>
          <CustomInput
            name="tfj"
            type="number"
            onChange={(e) => handleChange(e, "TFJ")}
            value={parameters?.[tabSelected]?.["TFJ"]?.["tfj"]}
            placeholder="Enter Value"
          />
        </div> */}
        {showImageModal && (
          <ImageModal tabSelected={tabSelected} setImageModal={setImageModal} />
        )}
      </div>
    </div>
  );
}
