import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./Landing page/home/HomePage";
import Signup from "./Landing page/signup/Signup";
import AboutPage from "./Landing page/about/AboutPage";
import ProductPage from "./Landing page/products/ProductPage";
import PricingPage from "./Landing page/pricing/PricingPage";
import SupportPage from "./Landing page/support/SupportPage";
import Footer from "./Landing page/Footer";
import NotFound from "./Landing page/NotFound";
import Login from "./Landing page/login/Login";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
  </BrowserRouter>
);
