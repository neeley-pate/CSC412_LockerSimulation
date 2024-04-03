import React from "react";
import { useNavigate } from "react-router-dom";
import { chosen } from "./Chosen_Locker";
 
const Keypad = () => {
    console.log(chosen)
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        if (chosen.state.password == ""){
            chosen.state.password =  document.getElementsByName("name")[0].value
            chosen.state.locked = true
            let path = "/lockers"; 
            navigate(path);
        } else {
            if (document.getElementsByName("name")[0].value == chosen.state.password){
                alert("Unlocked! Take your " + chosen.state.contents)
                chosen.state.locked = false
                chosen.state.password = ""
                chosen.state.contents = []
                chosen.state.id = -1
                let path = "/lockers"; 
                navigate(path);
            }else{
                // TODO: fix this
                // alert("Incorrect Password. Try again.")
                // chosen = chosen
                // let path = "/keypad"; 
                // navigate(path);
            }
        }
        // console.log(chosen)
    }
    return (
        <div>
            <h1>Keypad</h1>
            <form onSubmit={routeChange}>
            <label>
                Enter Password:
                <input type="text" name="name" required/>
            </label>
            <input type="submit" value="Submit"/>
            {/* <button id="1" type="button" onClick={() => routeChange(name.value)}>Lock</button> */}
            </form>
            {/* <button id="1" type="button" onClick={() => routeChange(this.value)}>Lock</button> */}
        </div>
    );
};
 
export default Keypad;