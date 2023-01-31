import Button from 'react-bootstrap/Button';

import React,{useState} from "react";
const Textform = (props) => {
    const [text,setText] = useState('');

    const Uppercase = () => {
        let upper = text.toUpperCase();
        setText(upper);
        props.showalert("Converted to uppercase!","success");
    };
    const onclick = (event) => {
        setText(event.target.value);
    };

    const Lowercase = () => {
        let lower = text.toLowerCase();
        setText(lower);
        props.showalert("Converted to lowercase!","success");
    };

    const Cleartext = () => {
        let clear = '';
        setText(clear);
        props.showalert("Clear text!","success");
    };
    // const Searchworld = (e) => {
    //     let v = document.getElementById("mybox");
    //     let search = text.split(/[v]/gi);
    //     // let find_count =new RegExp(v,search)
    //     setText(search);
    // };

    const Copytext = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copy text to clipbord!","success");
    };

    const RemoveExtraspace = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "));
        props.showalert("Removed extra space!","success");
    };

    return(
        <>
        <div className="container">
            <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode==='light'?'black':'white'}`} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} onChange={onclick} id="mybox" rows="10" placeholder="Enter text here"></textarea>
            </div>
            {/* <Button variant="primary">Primary</Button>{' '} */}
            <Button variant="primary" onClick={Uppercase}>Convert to Upper-Case</Button>
            <button className="btn btn-primary mx-1" onClick={Lowercase}>Convert to Lower-Case</button>
            <button className="btn btn-primary mx-1" onClick={Cleartext}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={Copytext}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={RemoveExtraspace}>Remove Extra Space</button>
            {/* <input id="input1"></input> */}
            {/* <button className="btn btn-primary mx-1" onClick={Searchworld}>Search-world</button> */}
            {/* <p>{text}</p> */}
        </div>

        <div className="container my-3">
            <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Your text summary</h2>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>Total Words is {text.split(' ').length} and total character is {text.length}</p>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{0.008 * text.split(' ').length} Minutes read</p>
            <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Preview</h2>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    );
};

export default Textform;