import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
     setAlert({
      msg: message,
      type: type
     })
  } 

  const capitalize = () =>{

  }

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success!");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success!");
    }
  }
  return (
    <>
    <Navbar title = "OurApp" mode = {mode} toggleMode = {toggleMode} aboutText = 'Click'/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm heading = "Enter text to analyze" mode = {mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
