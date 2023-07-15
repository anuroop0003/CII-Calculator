import "./customselect.css";

const CustomSelect = ({ label, option, onChange }) => {
  return (
    <div className='custom-select-container flex-grid-body'>
      <p>{label}</p>
      <select onChange={onChange}>
        {option.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
