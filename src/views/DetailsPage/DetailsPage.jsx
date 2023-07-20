import { Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CustomButton from "../../components/Button/Button";
import DataTabs from "../../components/DataTabs/DataTabs";
import Checkbox from "../../components/Input/Checkbox/Checkbox";
import CustomInput from "../../components/Input/Input";
import CustomSelect from "../../components/Select/CustomSelect";
import { CalculationContext } from "../../state management/ContextProvider";
import "./detailspage.css";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is a required field"),
  email: Yup.string()
    .required("Email is an required field")
    .email("Invalid email format"),
  vesselname: Yup.string().required("Vessel Name is a required field"),
  grossTonnage: Yup.string().required("Gross Tonnage is a required field"),
  shipowner: Yup.string().required("Ship Owner is a required field"),
  ismmanager: Yup.string().required("ISM Manager is a required field"),
  typeofvessel: Yup.string().required("Type of Vessel is a required field"),
  deadweight: Yup.string().required("Deadweight  is a required field"),
  imonumber: Yup.string().required("IMO Number is a required field"),
  yearofbuild: Yup.string().required("Year of built is a required field"),
  numberoffuels: Yup.number()
    .typeError("That doesn't look like a number")
    .required("Number of fuels is a required field"),
  numberofyears: Yup.array().min(1, "Must have atleast 1 years"),
  // .required("Number of years is a required field"),
});

const DetailsPage = () => {
  const navigate = useNavigate();
  const { parameters, setParameters } = useContext(CalculationContext);
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: "Test",
        email: "test@gmail.com",
        vesselname: "Test Vessel",
        grossTonnage: "1500",
        shipowner: "Tester",
        ismmanager: "Zack",
        typeofvessel: "Container Ship",
        deadweight: "500",
        imonumber: "123456789",
        yearofbuild: "2000",
        numberoffuels: "5",
        numberofyears: [2022],
      }}
      onSubmit={(values) => {
        // Alert the input values of the form that we filled
        // navigate("/calculate", { state: values });
        setParameters((prev) => ({
          ...prev,
          details: { data: values, visible: true },
        }));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <main>
          <div className="personal-info-container">
            <p className="personal-info-container-title">
              Personal Information
            </p>
            <div className="personal-info-container-body flex-grid-container">
              <CustomInput
                touched={touched.name}
                onChange={handleChange}
                name="name"
                value={values.name}
                error={errors.name}
                label={"Full Name"}
              />
              <CustomInput
                touched={touched.email}
                onChange={handleChange}
                name="email"
                value={values.email}
                error={errors.email}
                label={"Email Address"}
              />
            </div>
          </div>
          <div className="vessel-info-container">
            <p className="vessel-info-container-title">Vessel Information</p>
            <div className="vessel-info-container-body flex-grid-container">
              <CustomInput
                touched={touched.vesselname}
                onChange={handleChange}
                name="vesselname"
                value={values.vesselname}
                error={errors.vesselname}
                label={"Vessel Name"}
              />
              <CustomInput
                touched={touched.grossTonnage}
                onChange={handleChange}
                name="grossTonnage"
                value={values.grossTonnage}
                error={errors.grossTonnage}
                label={"Gross Tonnage"}
              />
            </div>
            <div className="vessel-info-container-body flex-grid-container">
              <CustomInput
                touched={touched.shipowner}
                onChange={handleChange}
                name="shipowner"
                value={values.shipowner}
                error={errors.shipowner}
                label={"Ship Owner"}
              />
              <CustomInput
                touched={touched.ismmanager}
                onChange={handleChange}
                name="ismmanager"
                value={values.ismmanager}
                error={errors.ismmanager}
                label={"ISM Manager"}
              />
            </div>
            <div className="vessel-info-container-body flex-grid-container">
              <CustomInput
                touched={touched.typeofvessel}
                onChange={handleChange}
                name="typeofvessel"
                value={values.typeofvessel}
                error={errors.typeofvessel}
                label={"Type of Vessel"}
              />
              <CustomInput
                touched={touched.deadweight}
                onChange={handleChange}
                name="deadweight"
                value={values.deadweight}
                error={errors.deadweight}
                label={"Deadweight at summer load line draught"}
              />
            </div>
            <div className="vessel-info-container-body flex-grid-container">
              <CustomInput
                touched={touched.imonumber}
                onChange={handleChange}
                name="imonumber"
                value={values.imonumber}
                error={errors.imonumber}
                label={"IMO Number"}
              />
              <CustomInput
                touched={touched.yearofbuild}
                onChange={handleChange}
                name="yearofbuild"
                value={values.yearofbuild}
                error={errors.yearofbuild}
                label={"Year of built"}
              />
            </div>
          </div>
          <div className="parameters-selection-container">
            <p className="parameters-selection-container-title">
              Select parameters for calculation
            </p>
            <div className="parameters-selection-container-body flex-grid-container">
              <p className="custom-input-label">Years to calculate</p>
              <div className="parameters-selection-checkbox-container">
                {[2022, 2023, 2024, 2025, 2026].map((item) => (
                  <Checkbox
                    checked={
                      values.numberofyears.includes(String(item)) ? true : false
                    }
                    name={"numberofyears"}
                    key={item}
                    value={item}
                    label={item}
                    handleChange={handleChange}
                  />
                ))}
              </div>
              {errors.numberofyears && touched.numberofyears && (
                <span className="cutom-input-error-msg">
                  {errors.numberofyears}
                </span>
              )}
              <p className="custom-input-label" style={{ margin: "20px 0" }}>
                Number of fuels used
              </p>
              <CustomSelect
                option={[
                  { value: 1, label: 1 },
                  { value: 2, label: 2 },
                  { value: 3, label: 3 },
                  { value: 4, label: 4 },
                  { value: 5, label: 5 },
                ]}
                touched={touched.numberoffuels}
                onChange={handleChange}
                name="numberoffuels"
                placeholder={"Select"}
                value={values.numberoffuels}
                error={errors.numberoffuels}
              />
            </div>
          </div>
          <div className="calculate-button-container">
            <CustomButton onClick={handleSubmit} label={"Enter Data"} />
          </div>
          {parameters?.details?.visible && (
            <div style={{ margin: "20px" }}>
              <DataTabs state={parameters?.details?.data} />
            </div>
          )}
        </main>
      )}
    </Formik>
  );
};

export default DetailsPage;
