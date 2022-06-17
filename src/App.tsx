import React from "react";
import "./App.css";
import {Routes, Route, Outlet} from "react-router-dom";

import Home from "./pages/Home";
import OnlineCoaching from "./pages/OnlineCoaching";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import Qualification from "./pages/Qualification";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coaching" element={<OnlineCoaching />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="*" element={"nix"} />
      </Routes>
    </div>
  );
}

export default App;
