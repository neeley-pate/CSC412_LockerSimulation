import * as React from 'react';
import { useNavigate } from "react-router-dom";
 
const Locker = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "/keypad"; 
        navigate(path);
    }
    return (
        <div>
        <button id="1" type="button" onClick={routeChange}>Locker 1</button>
        <button id="2" type="button" onClick={routeChange}>Locker 2</button>
        <button id="3" type="button" onClick={routeChange}> Locker 3</button>
        <button id="4" type="button" onClick={routeChange}>Locker 4</button>
        </div>
    );
};
 
export default Locker;