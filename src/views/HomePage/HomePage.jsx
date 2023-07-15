import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CustomButton from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Checkbox from "../../components/Input/Checkbox/Checkbox";
import CustomInput from "../../components/Input/Input";
import CustomTable from "../../components/Table/CustomTable";
import "./homepage.css";

const schema = Yup.object().shape({
  // ismmanager: Yup.string().required("ISM Manager is a required field"),
  // ismmanager: Yup.string().required("ISM Manager is a required field"),
  // ismmanager: Yup.string().required("ISM Manager is a required field"),
  // ismmanager: Yup.string().required("ISM Manager is a required field"),

  // ismmanager: Yup.string().required("Password is a required field").min(8, "Password must be at least 8 characters"),
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
  numberofyears: Yup.array()
    .length(3, "Must have atleast 3 years")
    .required("Number of years is a required field"),
});

const HomePage = () => {
  const navigate = useNavigate();
  const [showTable, setShowTable] = useState({ visible: false, data: {} });
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        // name: "a",
        // // email: "1",
        // email: "anuroop@gmail.com",
        // vesselname: "a",
        // grossTonnage: "a",
        // shipowner: "a",
        // ismmanager: "a",
        // typeofvessel: "a",
        // deadweight: "a",
        // imonumber: "a",
        // yearofbuild: "a",
        // numberoffuels: "5",
        // numberofyears: [2012, 2013, 2023],

        name: "",
        email: "",
        vesselname: "",
        grossTonnage: "",
        shipowner: "",
        ismmanager: "",
        typeofvessel: "",
        deadweight: "",
        imonumber: "",
        yearofbuild: "",
        numberoffuels: "",
        numberofyears: [],
      }}
      onSubmit={(values) => {
        // Alert the input values of the form that we filled
        // navigate("/calculate", { state: values });
        setShowTable({ data: values, visible: true });
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
        <>
          <Header />
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
            <span>Select parameters for calculation</span>
            <div className="parameters-selection-container-body flex-grid-container">
              <p>Years to calculate</p>
              <div className="parameters-selection-checkbox-container">
                {[
                  2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
                  2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
                ].map((item) => (
                  <Checkbox
                    name={"numberofyears"}
                    key={item}
                    value={item}
                    label={item}
                    handleChange={handleChange}
                  />
                ))}
              </div>
              {errors.numberofyears && (
                <span className="cutom-input-error-msg">
                  {errors.numberofyears}
                </span>
              )}
              <p style={{ margin: "20px 0" }}>Number of fuels used</p>
              <CustomInput
                touched={touched.numberoffuels}
                onChange={handleChange}
                name="numberoffuels"
                value={values.numberoffuels}
                error={errors.numberoffuels}
              />
            </div>
          </div>
          <div className="calculate-button-container">
            <CustomButton onClick={handleSubmit} label={"Enter Data"} />
          </div>
          {showTable.visible && <CustomTable state={showTable.data} />}
        </>
      )}
    </Formik>
  );
};

export default HomePage;
