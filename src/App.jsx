import { Route, Routes } from "react-router-dom";
import DetailsPage from "./views/DetailsPage/DetailsPage";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <Routes path="/">
      <Route index element={<HomePage />}></Route>
      {/* <Route path="/" element={<HomePage />}></Route> */}
      <Route path="/details" element={<DetailsPage />}></Route>
    </Routes>
  );
}

export default App;
