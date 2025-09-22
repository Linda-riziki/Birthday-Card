import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Letter from "./Letter.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />         {/* Main birthday card */}
        <Route path="/letter" element={<Letter />} /> {/* Private letter page */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
