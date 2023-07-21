import "./input.css";

const CustomInput = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  touched,
  type,
}) => {
  return (
    <div autoFocus className="custom-input-container flex-grid-body">
      {label && <p className="custom-input-label">{label}</p>}
      <input
        pattern="[0-9]*"
        type={type ?? "text"}
        placeholder={placeholder}
        value={value ?? ""}
        name={name}
        min={type && 1}
        onChange={onChange}
      />
      {error && (
        <span className="cutom-input-error-msg">
          {error && touched && error}
        </span>
      )}
    </div>
  );
};

export default CustomInput;

// isSafeInteger
