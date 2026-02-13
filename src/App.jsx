import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ServiceLandingPage from "./pages/ServiceLandingPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:slug" element={<ProductPage />} />
      <Route path="/services/:slug" element={<ServiceLandingPage />} />
    </Routes>
  );
}
