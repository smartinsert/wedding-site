import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Menu from "./components/menu";
import GettingMarried from "./components/getting-married";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-married" element={<GettingMarried />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
