import "./input.css";

const CustomInput = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  touched,
}) => {
  return (
    <div autoFocus className="custom-input-container flex-grid-body">
      {label && <p className="custom-input-label">{label}</p>}
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <span className="cutom-input-error-msg">{error && touched && error}</span>
    </div>
  );
};

export default CustomInput;
