import "./button.css";

const CustomButton = ({ label, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className="custom-btn">
      {label}
    </button>
  );
};

export default CustomButton;
