import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import Footer from "./components/Footer"; 
import "./App.css";

function App() {
  const [mode, setMode] = useState("light"); 
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 1500);
  };

  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; 
      document.body.style.color = "white";  
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";   
      document.body.style.color = "black";             
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

 
  const handleColorChange = (event) => {
    const color = event.target.value;
    document.body.style.background = `linear-gradient(135deg, ${color}, #000)`;
    showAlert(`Theme color changed to ${color}`, "success");
  };

  
  useEffect(() => {
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = mode === "dark" ? "/favicon-dark.png" : "/favicon-light.png";
    }
  }, [mode]);

  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        btnText="Submit"
        mode={mode}
        toggleMode={toggleMode}
        onColorChange={handleColorChange}
      />

      {alert && <Alert Alert={alert} />}

      <div className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>

      <Footer mode={mode} />
    </Router>
  );
}

export default App;
