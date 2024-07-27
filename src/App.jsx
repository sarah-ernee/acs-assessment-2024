import React, { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";

const questions = {
  position: "fixed",
  bottom: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

function App() {
  const [currentPage, setCurrentPage] = useState("Calculator");

  const renderComponent = () => {
    switch (currentPage) {
      case "Calculator":
        return <Calculator />;
      case "Navbar":
        return <Navbar />;
      default:
        return <Calculator />;
    }
  };

  return (
    <div>
      {renderComponent()}

      <div style={questions}>
        <button onClick={() => setCurrentPage("Calculator")}>Question 1</button>
        <button onClick={() => setCurrentPage("Navbar")}>Question 2</button>
      </div>
    </div>
  );
}

export default App;
