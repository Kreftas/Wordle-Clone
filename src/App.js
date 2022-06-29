import React from "react";
import Wordle from "./Wordle";
import Secret from "./Secret";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" element={<Wordle />} />
          <Route path="secret" element={<Secret />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
