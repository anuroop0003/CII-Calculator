import { Route, Routes } from "react-router-dom";
import CalculationPage from "./views/CalculationPage/CalculationPage";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <Routes path="/">
      <Route index element={<HomePage />}></Route>
      <Route path="/calculate" element={<CalculationPage />}></Route>
    </Routes>
  );
}

export default App;
