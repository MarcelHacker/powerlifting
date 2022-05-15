import React from "react";
import "./App.css";
import {Routes, Route, Outlet} from "react-router-dom";

import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Athlete from "./pages/Athlete";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/athlete/:id" element={<Athlete />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={"nix"} />
      </Routes>
    </div>
  );
}

export default App;
