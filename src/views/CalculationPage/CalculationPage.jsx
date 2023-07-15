import { useLocation } from "react-router-dom";
import CustomTable from "../../components/Table/CustomTable";
import "./calculationpage.css";

const CalculationPage = () => {
  const location = useLocation();
  return (
    <div className="table-container">
      <CustomTable data={location.state} />
    </div>
  );
};

export default CalculationPage;
