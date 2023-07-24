import { Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import CustomButton from "../../components/Button/Button";
import DataTabs from "../../components/DataTabs/DataTabs";
import Checkbox from "../../components/Input/Checkbox/Checkbox";
import CustomInput from "../../components/Input/Input";
import CustomSelect from "../../components/Select/CustomSelect";
import { iceClass } from "../../data/iceClass";
import { shipTypes } from "../../data/shiptypes";
import { CalculationContext } from "../../state management/ContextProvider";
import "./detailspage.css";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is a required field"),
  email: Yup.string()
    .required("Email is an required field")
    .email("Invalid email format"),
  vesselname: Yup.string().required("Vessel Name is a required field"),
  grossTonnage: Yup.number()
    .min(1, "Enter a value greater than 0")
    .required("Gross Tonnage is a required field")
    .typeError("That doesn't look like a number"),
  shipowner: Yup.string().required("Ship Owner is a required field"),
  ismmanager: Yup.string().required("ISM Manager is a required field"),
  typeofvessel: Yup.string().required("Type of Vessel is a required field"),
  iceclass: Yup.string().required("Ice Class is a required field"),
  deadweight: Yup.number()
    .min(1, "Enter a value greater than 0")
    .required("Deadweight  is a required field")
    .typeError("That doesn't look like a number"),
  imonumber: Yup.string().required("IMO Number is a required field"),
  flag: Yup.string().required("Flag is a required field"),
  // main_MCR1: Yup.number().when("numberofengine_main", {
  //   is: (value) => value === 1,
  //   then: Yup.number()
  //     .min(1, "Enter a value greater than 0")
  //     .required("Engine MCR 1 is a required field")
  //     .typeError("That doesn't look like a number"),
  //   otherwise: Yup.number().notRequired("Engine MCR 1 is a required field"),
  // }),

  main_MCR1: Yup.number().when(["numberofengine_main"], {
    is: (value) => value === 1,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 1 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  main_MCR2: Yup.number().when(["numberofengine_main"], {
    is: (value) => value === 2,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 2 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  main_MCR3: Yup.number().when(["numberofengine_main"], {
    is: (value) => value === 3,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 3 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  main_MCR4: Yup.number().when(["numberofengine_main"], {
    is: (value) => value === 4,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 4 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  main_MCR5: Yup.number().when(["numberofengine_main"], {
    is: (value) => value === 5,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 5 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),

  aux_MCR1: Yup.number().when(["numberofengine_aux"], {
    is: (value) => value === 1,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 1 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  aux_MCR2: Yup.number().when(["numberofengine_aux"], {
    is: (value) => value === 2,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 2 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  aux_MCR3: Yup.number().when(["numberofengine_aux"], {
    is: (value) => value === 3,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 3 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  aux_MCR4: Yup.number().when(["numberofengine_aux"], {
    is: (value) => value === 4,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 4 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),
  aux_MCR5: Yup.number().when(["numberofengine_aux"], {
    is: (value) => value === 5,
    then: (schema) =>
      schema
        .min(1, "Enter a value greater than 0")
        .required("Engine MCR 5 is a required field")
        .typeError("That doesn't look like a number"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // main_MCR1: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 1 is a required field")
  //   .typeError("That doesn't look like a number"),
  // main_MCR2: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 2 is a required field")
  //   .typeError("That doesn't look like a number"),
  // main_MCR3: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 3 is a required field")
  //   .typeError("That doesn't look like a number"),
  // main_MCR4: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 4 is a required field")
  //   .typeError("That doesn't look like a number"),
  // main_MCR5: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 5 is a required field")
  //   .typeError("That doesn't look like a number"),
  yearofbuild: Yup.string()
    .required("Year of built is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits"),
  // aux_MCR1: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 1 is a required field")
  //   .typeError("That doesn't look like a number"),
  // aux_MCR2: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 2 is a required field")
  //   .typeError("That doesn't look like a number"),
  // aux_MCR3: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 3 is a required field")
  //   .typeError("That doesn't look like a number"),
  // aux_MCR4: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 4 is a required field")
  //   .typeError("That doesn't look like a number"),
  // aux_MCR5: Yup.number()
  //   .min(1, "Enter a value greater than 0")
  //   .required("Engine MCR 5 is a required field")
  //   .typeError("That doesn't look like a number"),
  numberoffuels: Yup.number()
    .typeError("That doesn't look like a number")
    .required("Number of fuels is a required field"),
  numberofyears: Yup.array().min(1, "Must have atleast 1 years"),
  numberofengine_main: Yup.number()
    .typeError("That doesn't look like a number")
    .required("Number of engine is a required field"),
  numberofengine_aux: Yup.number()
    .typeError("That doesn't look like a number")
    .required("Number of engine is a required field"),
});

const DetailsPage = () => {
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
        typeofvessel: "",
        deadweight: "",
        imonumber: "123456789",
        yearofbuild: "2000",
        numberoffuels: "",
        iceclass: "1",
        flag: "India",
        numberofyears: [],
        numberofengine_main: "1",
        numberofengine_aux: "1",
        main_MCR1: "1",
        main_MCR2: "1",
        main_MCR3: "1",
        main_MCR4: "1",
        main_MCR5: "1",
        aux_MCR1: "1",
        aux_MCR2: "1",
        aux_MCR3: "1",
        aux_MCR4: "1",
        aux_MCR5: "1",
      }}
      onSubmit={(values) => {
        setParameters((prev) => ({
          ...prev,
          details: values,
          showDataTabs: true,
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
        <main id="main">
          <div className="personal-info-container" id="container1">
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
                placeholder="Enter Value"
              />
              <CustomInput
                touched={touched.email}
                onChange={handleChange}
                name="email"
                value={values.email}
                error={errors.email}
                label={"Email Address"}
                placeholder="Enter Value"
              />
            </div>
          </div>
          <div className="vessel-info-container" id="container2">
            <p className="vessel-info-container-title">Vessel Information</p>
            <div className="vessel-info-container-body flex-grid-container">
              <CustomInput
                touched={touched.vesselname}
                onChange={handleChange}
                name="vesselname"
                value={values.vesselname}
                error={errors.vesselname}
                label={"Vessel Name"}
                placeholder="Enter Value"
              />
              <CustomInput
                touched={touched.grossTonnage}
                onChange={handleChange}
                name="grossTonnage"
                value={values.grossTonnage}
                error={errors.grossTonnage}
                label={"Gross Tonnage"}
                placeholder="Enter Value"
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
                placeholder="Enter Value"
              />
              <CustomInput
                touched={touched.ismmanager}
                onChange={handleChange}
                name="ismmanager"
                value={values.ismmanager}
                error={errors.ismmanager}
                label={"ISM Manager"}
                placeholder="Enter Value"
              />
            </div>
            <div className="vessel-info-container-body flex-grid-container">
              <CustomSelect
                option={shipTypes}
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
                placeholder="Enter Value"
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
                placeholder="Enter Value"
              />
              <CustomInput
                touched={touched.yearofbuild}
                onChange={handleChange}
                name="yearofbuild"
                value={values.yearofbuild}
                error={errors.yearofbuild}
                label={"Year of built"}
                placeholder="Enter Value"
              />
            </div>
            <div className="vessel-info-container-body flex-grid-container">
              <CustomSelect
                option={iceClass}
                touched={touched.iceclass}
                onChange={handleChange}
                name="iceclass"
                value={values.iceclass}
                error={errors.iceclass}
                label={"ICE Class"}
              />
              <CustomInput
                touched={touched.flag}
                onChange={handleChange}
                name="flag"
                value={values.flag}
                error={errors.flag}
                label={"Flag"}
                placeholder="Enter Value"
              />
            </div>
          </div>
          <div className="parameters-selection-container" id="container3">
            <p className="parameters-selection-container-title">Main Engine</p>
            <div className="parameters-selection-container-body flex-grid-container">
              <CustomSelect
                touched={touched.numberofengine_main}
                onChange={handleChange}
                name="numberofengine_main"
                value={values.numberofengine_main}
                error={errors.numberofengine_main}
                label={"Number of Engine"}
                placeholder="Enter Value"
                option={[
                  { value: 1, label: 1 },
                  { value: 2, label: 2 },
                  { value: 3, label: 3 },
                  { value: 4, label: 4 },
                  { value: 5, label: 5 },
                ]}
              />
              <div className="engine-parameters-container">
                {Number(values.numberofengine_main) >= 1 && (
                  <CustomInput
                    touched={touched.main_MCR1}
                    onChange={handleChange}
                    name="main_MCR1"
                    value={values.main_MCR1}
                    error={errors.main_MCR1}
                    label={"Engine MCR 1"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_main) >= 2 && (
                  <CustomInput
                    touched={touched.main_MCR2}
                    onChange={handleChange}
                    name="main_MCR2"
                    value={values.main_MCR2}
                    error={errors.main_MCR2}
                    label={"Engine MCR 2"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_main) >= 3 && (
                  <CustomInput
                    touched={touched.main_MCR3}
                    onChange={handleChange}
                    name="main_MCR3"
                    value={values.main_MCR3}
                    error={errors.main_MCR3}
                    label={"Engine MCR 3"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_main) >= 4 && (
                  <CustomInput
                    touched={touched.main_MCR4}
                    onChange={handleChange}
                    name="main_MCR4"
                    value={values.main_MCR4}
                    error={errors.main_MCR4}
                    label={"Engine MCR 4"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_main) >= 5 && (
                  <CustomInput
                    touched={touched.main_MCR5}
                    onChange={handleChange}
                    name="main_MCR5"
                    value={values.main_MCR5}
                    error={errors.main_MCR5}
                    label={"Engine MCR 5"}
                    placeholder="Enter Value"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="parameters-selection-container" id="container4">
            <p className="parameters-selection-container-title">
              Auxiliary Engine
            </p>
            <div className="parameters-selection-container-body flex-grid-container">
              <CustomSelect
                touched={touched.numberofengine_aux}
                onChange={handleChange}
                name="numberofengine_aux"
                value={values.numberofengine_aux}
                error={errors.numberofengine_aux}
                label={"Number of Engine"}
                placeholder="Enter Value"
                option={[
                  { value: 1, label: 1 },
                  { value: 2, label: 2 },
                  { value: 3, label: 3 },
                  { value: 4, label: 4 },
                  { value: 5, label: 5 },
                ]}
              />
              <div className="engine-parameters-container">
                {Number(values.numberofengine_aux) >= 1 && (
                  <CustomInput
                    touched={touched.aux_MCR1}
                    onChange={handleChange}
                    name="aux_MCR1"
                    value={values.aux_MCR1}
                    error={errors.aux_MCR1}
                    label={"Engine MCR 1"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_aux) >= 2 && (
                  <CustomInput
                    touched={touched.aux_MCR2}
                    onChange={handleChange}
                    name="aux_MCR2"
                    value={values.aux_MCR2}
                    error={errors.aux_MCR2}
                    label={"Engine MCR 2"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_aux) >= 3 && (
                  <CustomInput
                    touched={touched.aux_MCR3}
                    onChange={handleChange}
                    name="aux_MCR3"
                    value={values.aux_MCR3}
                    error={errors.aux_MCR3}
                    label={"Engine MCR 3"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_aux) >= 4 && (
                  <CustomInput
                    touched={touched.aux_MCR4}
                    onChange={handleChange}
                    name="aux_MCR4"
                    value={values.aux_MCR4}
                    error={errors.aux_MCR4}
                    label={"Engine MCR 4"}
                    placeholder="Enter Value"
                  />
                )}
                {Number(values.numberofengine_aux) >= 5 && (
                  <CustomInput
                    touched={touched.aux_MCR5}
                    onChange={handleChange}
                    name="aux_MCR5"
                    value={values.aux_MCR5}
                    error={errors.aux_MCR5}
                    label={"Engine MCR 5"}
                    placeholder="Enter Value"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="parameters-selection-container" id="container5">
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
          <div className="calculate-button-container" id="container6">
            <CustomButton onClick={handleSubmit} label={"Enter Data"} />
          </div>
          {parameters?.showDataTabs && (
            <div style={{ margin: "20px" }} id="main-container1">
              <DataTabs state={parameters?.details} />
            </div>
          )}
        </main>
      )}
    </Formik>
  );
};

export default DetailsPage;
