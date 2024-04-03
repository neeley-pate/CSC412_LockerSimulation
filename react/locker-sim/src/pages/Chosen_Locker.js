import React from "react";



class Chosen_Locker {
    constructor(){
        this.state = {id: -1, password: "", contents: [], locked: false}
    }

    get_info(){
        console.log(chosen.state)
    }
}

export let chosen = new Chosen_Locker()