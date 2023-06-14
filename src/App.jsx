// Import of my userinput and Useroutput

import Userinput from "./components/Userinput";
import Useroutput from "./components/Useroutput";
import './index.css';
import { useState } from "react";


function App() {
  const [userName, setUserName] = useState("Matthew Olorunjuwon")
  
const stateManipulator = (e)=>{
  setUserName (e.target.value)
  // setCurrentValue (e.target.value)
  
}
  return (
    // Userinput element
    <div className="App">
 

    {/* Useroutput element */}
  
    <Useroutput  display = {userName}/>


    {/* Change Event handler */}
    <Userinput changeEvent = {stateManipulator}/>
  
    </div>
  );
}

export default App;
