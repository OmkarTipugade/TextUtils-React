import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";

// import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // wether dark mode is enabled or disabled

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
