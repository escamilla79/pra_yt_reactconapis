import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import AboutPage from "../pages/AboutPage";
import PrimerComponete from "../components/PrimerComponete";
import Card from "../components/card/Card";
import Counter from "../components/hooks/Counter";
import ItemListContainer from "../components/promesas_map/ItemListContainer";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/primerComponente" element={<PrimerComponete />} />
        <Route path="/card" element={<Card />} />
        <Route path="/hooks" element={<Counter />} />
        <Route path="/promesas" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
