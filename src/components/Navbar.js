import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/user";

const Navbar = ()=> {

    const isLogin = useSelector(selectLogin)
    const [val, setVal] = useState("tech")
    return(
        <div>

            {isLogin ? (<div><input /></div>): (<div></div>) }

        </div>
    )
}

export default Navbar;