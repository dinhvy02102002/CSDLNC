import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<ShopPage />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
