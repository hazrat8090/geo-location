import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Pricing from "./components/pages/Pricing";
import PageNotFount from "./components/pages/PageNotFount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
