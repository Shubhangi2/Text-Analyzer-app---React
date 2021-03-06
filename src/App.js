
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
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


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#00223c"
      document.body.style.color = "white"
      showAlert('Dark mode enabled', 'success')
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black" 
      showAlert('Light mode enabled', 'success')
    
    }
  }



  return (
    <>
    <Navbar mode = {mode} toggleMode= {toggleMode} showAlert = {showAlert}/>
    <Alert alert = {alert}/>
    <div className="container my-3 myclass">
      <TextForm heading="Enter your text to analyze" mode = {mode} showAlert = {showAlert}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;


