import { GoogleOAuthProvider } from "@react-oauth/google";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./state management/ContextProvider";
import DetailsPage from "./views/DetailsPage/DetailsPage";
import HomePage from "./views/HomePage/HomePage";
import LoginPage from "./views/LoginPage/LoginPage";
import ResultPage from "./views/ResultPage/ResultPage";

function App() {
  return (
    <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
      <ContextProvider>
        <Routes path="/">
          <Route index element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/details" element={<DetailsPage />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
        </Routes>
      </ContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
