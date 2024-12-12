
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type)=>{
    setAlert({
        msg : msg,
        type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  if(mode === 'dark'){
    document.body.style.backgroundColor = "#00223c"
      document.body.style.color = "white"
  }else{
    document.body.style.backgroundColor = "white"
      document.body.style.color = "black" 
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert('Dark mode enabled', 'success')
      
    }else{
      setMode('light');
      showAlert('Light mode enabled', 'success')
    }
  }



  return (
    <>
  <BrowserRouter>
    <Navbar mode = {mode} toggleMode= {toggleMode} showAlert = {showAlert}/>
    <Alert alert = {alert}/>
    <div className="container my-3 myclass">
      <Routes>
          <Route path="/about" element={<About mode = {mode}/>}/>
          <Route path="/" element={<TextForm heading="Enter your text to analyze ,,,,, this is for testing" mode = {mode} showAlert = {showAlert}/>}/>
      </Routes>

    </div>
    </BrowserRouter>
    </>
  );
}

export default App;


