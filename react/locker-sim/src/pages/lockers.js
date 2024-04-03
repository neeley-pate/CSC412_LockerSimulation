import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { chosen } from "./Chosen_Locker";

 
const Locker = () => {
    console.log(chosen)
    let navigate = useNavigate(); 
    const routeChange = (id) =>{ 
        if (chosen.state.id != -1 && chosen.state.id != id){
            alert("You have already locked your contents in another locker!")
        }
        else if (chosen.state.id != -1 && chosen.state.locked){
            console.log(chosen)
            let path = "/keypad"; 
            navigate(path);
        }else{
            chosen.state.id = id
            console.log(chosen)
            let path = "/contents"; 
            navigate(path);
        }
    }
    return (
        <div>
        <button id="1" type="button" onClick={() => routeChange("1")}>Locker 1</button>
        <button id="2" type="button" onClick={() => routeChange("2")}>Locker 2</button>
        <button id="3" type="button" onClick={() => routeChange("3")}> Locker 3</button>
        <button id="4" type="button" onClick={() => routeChange("4")}>Locker 4</button>
        </div>
    );
};
 
export default Locker;