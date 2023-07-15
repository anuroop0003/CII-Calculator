import "./checkbox.css";

const Checkbox = ({ value, name, label, handleChange }) => {
  return (
    <div className="checkbox-container">
      <input
        name={name}
        value={value}
        key={value}
        type="checkbox"
        onChange={handleChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
