import React, {useState} from 'react'


export default function Textform(props) {
    //1st button
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    //2nd button
    const handleloClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to loClick!", "success");
    }
    //3rd button
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }
    //4th button
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Converted to ExtraSpaces removed!", "success");
    }



    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        {/* <div className="container">  */}
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
             color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1"  onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1"  onClick={handleClearClick}>Convert to clearcase</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove extra space</button>
        </div>
        {/* <div className="container my-3"> */}
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            {/* For removing space in word count and character count */}
             <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            {/* <p>{text.split(" ").length-1} word and {text.length} characters</p> */}
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            {/* <p>{text}</p> */}
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
            
        
        </>
    )
}
