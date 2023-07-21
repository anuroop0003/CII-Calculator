import "./customselect.css";

const CustomSelect = ({
  label,
  option,
  onChange,
  error,
  touched,
  name,
  value,
  multiple,
  placeholder,
}) => {
  return (
    <div className="custom-select-container flex-grid-body">
      {label && <p className="custom-select-label">{label}</p>}
      <select
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        multiple={multiple}
      >
        <option defaultChecked>Select your option</option>
        {option.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="cutom-select-error-msg">
          {error && touched && error}
        </span>
      )}
    </div>
  );
};

export default CustomSelect;
