import React from "react";
import { useNavigate } from "react-router-dom";
 
const Keypad = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "/lockers"; 
        navigate(path);
    }
    console.log(this)
    return (
        <div>
            <h1>Keypad</h1>
            <button id="1" type="button" onClick={routeChange}>Lock</button>
        </div>
    );
};
 
export default Keypad;