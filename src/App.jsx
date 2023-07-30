import { Route, Routes } from "react-router-dom";
import Layouter from "./layouts";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ContextProvider } from "./state management/ContextProvider";
import DetailsPage from "./views/DetailsPage/DetailsPage";
import HomePage from "./views/HomePage/HomePage";
import LoginPage from "./views/LoginPage/LoginPage";
import ResultPage from "./views/ResultPage/ResultPage";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layouter />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Route>
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
