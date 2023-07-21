import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./state management/ContextProvider";
import DetailsPage from "./views/DetailsPage/DetailsPage";
import HomePage from "./views/HomePage/HomePage";
import ResultPage from "./views/ResultPage/ResultPage";

function App() {
  return (
    <ContextProvider>
      <Routes path="/">
        <Route index element={<HomePage />}></Route>
        <Route path="/details" element={<DetailsPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
