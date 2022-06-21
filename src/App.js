
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#00223c"
      document.body.style.color = "white"
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black" 
    
    }
  }



  return (
    <>
    <Navbar mode = {mode} toggleMode= {toggleMode}/>
    <div className="container my-3 myclass">
      <TextForm heading="Enter your text to analyze" mode = {mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;


