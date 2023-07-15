import "./input.css";

const CustomInput = ({ label }) => {
  return (
    <div className='custom-input-container flex-grid-body'>
      <p>{label}</p>
      <input />
    </div>
  );
};

export default CustomInput;
