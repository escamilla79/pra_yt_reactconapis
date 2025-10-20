import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import AboutPage from "../pages/AboutPage";
import PrimerComponete from "../components/PrimerComponete";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/primerComponente" element={<PrimerComponete />} />
      </Routes>
    </BrowserRouter>
  );
};
