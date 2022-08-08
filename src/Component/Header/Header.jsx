import React , { useState , useContext } from "react";
import Drilingstate from '../../statemangement/context'
import Headeruserless from "./Headeruserless";
import Headerwithuser from "./Headerwithuser";
export default function Header() {
    let login = false;
    if(localStorage.getItem("User")){
        login = true
    }
    return (
        login ? <Headerwithuser /> : <Headeruserless />
    )
}