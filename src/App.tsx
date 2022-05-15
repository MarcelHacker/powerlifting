import React from "react";
import "./App.css";
import {Routes, Route, Outlet} from "react-router-dom";

import Home from "./pages/Home";
import Docs from "./pages/Docs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={"nix"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
