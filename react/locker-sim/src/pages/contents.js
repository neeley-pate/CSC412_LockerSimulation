// should allow user to insert contents of items
import React from "react";
import { useNavigate } from "react-router-dom";
import { chosen } from "./Chosen_Locker";

const Contents = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        chosen.state.contents =  document.getElementsByName("name")[0].value
        // console.log(chosen)
        let path = "/keypad"; 
        navigate(path);
    }
    return (
        <div>
            <h1>Contents</h1>
            <form onSubmit={routeChange}>
            <label>
                Enter Contents You Wish to Store:
                <input type="text" name="name" required/>
            </label>
            <input type="submit" value="Submit"/>
            {/* <button id="1" type="button" onClick={() => routeChange(name.value)}>Lock</button> */}
            </form>
            {/* <button id="1" type="button" onClick={() => routeChange(this.value)}>Lock</button> */}
        </div>
    );
};
 
export default Contents;