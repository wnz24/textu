import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
// import "./components/Navbar.scss"
import { BrowserRouter as 
  Router,
  Routes,
  Route,
  Link, 
  }
      from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [Colormode, setColorMode] = useState(null);
  //

  // useEffect (()=>{
  //   const currentThemeColor = localStorage.getItem('color-palette');
  //   if(currentThemeColor){
  //     setMode(currentThemeColor);
  //   }
  // }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b2347";
      showAlert("Dark Mode has been Enabeld", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabeld", "success");
    }
  };

  // const ColorClick = (color)=>{
  //   setColorMode(color);
  //   localStorage.setItem('color-palette', color);

  // };
  return (
    <>
    <Router>
      <Navbar title="TextU" mode={mode} toggelMode={toggelMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      
        <Routes>
          <Route path="/about"
           element={ <About/>}>
          </Route>

          <Route path="/"
           element={ <Form
              showAlert={showAlert}
              heading="Enter text to analyze"
              mode={mode}
            />}>
          </Route>
        </Routes>
        
      </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
