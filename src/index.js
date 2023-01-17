import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./App.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import componenten
import Navigatie from "./componenten/Navigatie/navigatie";

import Footer from "./componenten/Footer/footer";
import Vervang from "./componenten/Detailpaginas/Vervangingingspag";
import Main from "./componenten/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navigatie />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/vervang" element={<Vervang />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
