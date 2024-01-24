import React, { useState } from "react";

export default function Form(props) {
  const handleupclick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' Changed to UpperCase ', 'success');
  };
  const handledownclick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Changed to LowerCase', 'success');
  };
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
   props.showAlert(' File has been Downloaded', 'success');
}
  

 

  const onhandlechange = (Event) => {
    console.log("on change");
    setText(Event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <>
    <div className="container" style= {{color: props.mode =='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onhandlechange} 
          style = {{backgroundColor: props.mode =='dark'?'grey':'white', color: props.mode =='dark'?'white':'black'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleupclick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handledownclick}>
          convert to Lowecase
        </button>
        <button className='btn btn-primary my-2' onClick={downloadTxtFile}>
          Download Text</button>
       
       
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text Above to Preview it"}</p>
      
      </div>

    </div>
  </>
  );
}
