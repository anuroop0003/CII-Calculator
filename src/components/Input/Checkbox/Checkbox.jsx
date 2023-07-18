import "./checkbox.css";

const Checkbox = ({ value, name, label, handleChange, checked }) => {
  return (
    <div className="checkbox-container">
      <input
        checked={Boolean(checked)}
        id="my-check-box"
        name={name}
        value={value ?? ""}
        key={value}
        type="checkbox"
        onChange={handleChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
