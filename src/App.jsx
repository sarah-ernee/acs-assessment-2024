import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Question 1</Link>
          </li>
          <li>
            <Link to="/q2">Question 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/q2" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
