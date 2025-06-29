import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import dotenv from "dotenv";
import "./index.css"
import HomePage from './landing_page/home/HomePage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import Signmain from './landing_page/signup/Signmain.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Navbar from "./landing_page/Navbar.jsx";
import Footer from './landing_page/Footer.jsx';
import NotFound from './NotFound.jsx';
import { CopilotKit } from "@copilotkit/react-core"
import {CopilotPopup} from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css";
// dotenv.config();
const ApiKey = import.meta.env.VITE_COPILOT_API_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CopilotKit  publicApiKey={ApiKey}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signmain />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
       <CopilotPopup
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
      <Footer />
    </CopilotKit>
  </BrowserRouter>
)
