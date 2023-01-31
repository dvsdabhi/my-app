import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);

  const Showalert = (message,type) => {
    setalert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setalert(null);
    },2000);
  };

  const Changemode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#06062e';
      Showalert("dark-mode has been enabled","success");
      document.title = 'TextUtils - dark mode';
      // setInterval(()=>{
      //   document.title = 'unable dark mode'
      // },2000);
      // setInterval(()=>{
      //   document.title = 'mode is mode'
      // },1500);
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      Showalert("light-mode has been enabled","success");
      document.title = 'TextUtils - light mode';
    };
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title = "TextUtils" mode={mode} Changemode1 = {Changemode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Textform showalert={Showalert} heading="Enter the text to analayze." mode={mode} />
      {/* <Routes>
        <Route path='' element={<Textform showalert={Showalert} heading="Enter the text to analayze." mode={mode} />}></Route>
        <Route path='About/' element={<About />}></Route>
      </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    
    {/* {<About />} */}
    {/* <Textform showalert={Showalert} heading="Enter the text to analayze." mode={mode} /> */}
    
    </>
  );
}

export default App;
