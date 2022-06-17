import React from "react";
import "./App.css";
import {Routes, Route, Outlet} from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={"nix"} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={"nix"} />
      </Routes>
    </div>
  );
}

export default App;
