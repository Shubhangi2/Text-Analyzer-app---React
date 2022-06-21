import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = (event)=>{
    // console.log("you click on a button which says convert to uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  }


  const toLoClick = ()=>{
    // console.log("You clicked on to lowercase.");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("not it will be change");
    setText(event.target.value);

  }

  const toFUCase = () =>{
    let words = text.split(' ');
    let capLetter = [];
    words.forEach(element => {
        capLetter.push(element[0].toUpperCase() + element.slice(1, element.length));
    });

    console.log(capLetter.join(' '));
    setText(capLetter.join(' '));
  }

  const speak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  return (
    <>
    <div className='container'  style = {{
      color : props.mode === 'light' ? 'black' : 'white',
      backgroundColor : props.mode === 'light' ? 'white' : '#00223c'
    }}>
        <div className="mb-3" >
          <h3>{props.heading}</h3>
          <textarea className="form-control"   value={text} onChange={handleOnChange} id="myTextArea" rows="10" style = {{
              color : props.mode === 'light' ? 'black' : 'white',
              backgroundColor : props.mode === 'light' ? 'white' : '#00223c'
            }}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={toLoClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={toFUCase}>first letter uppercase</button>
        <button className="btn btn-primary mx-1" onClick={speak}>voice assistant</button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p> {text.split(" ").length} words and {text.length} characters</p>
      </div>
      

      <div className="container">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </>
  )
}
