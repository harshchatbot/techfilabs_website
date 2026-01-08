import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SalesforceCoachingAjmer from "./pages/SalesforceCoachingAjmer.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
