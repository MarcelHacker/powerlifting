import React from "react";
import "./App.css";
import {Routes, Route, Outlet} from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="*" element={"nix"} />
      </Routes>
    </div>
  );
}

export default App;
