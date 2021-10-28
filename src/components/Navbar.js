import React from "react";
import { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectUserData, setLogin, setSearch, setUserData } from "../features/user";

const Navbar = () => {

    const isLogin = useSelector(selectLogin)
    const [val, setVal] = useState("tech")
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch()

    const logout = () => {

        dispatch(setUserData(null))
        dispatch(setLogin(false))

    }
    const handleClick = (e) => {

        e.preventDefault()
        console.log(e)
        dispatch(setSearch(val))
    }
    return (
       <div style={{ backgroundColor: "black"}}>
              {isLogin && (<nav className="navbar navbar-expand-md" style={{padding: "20px"}}>
                <h1 className="navbar-brand" style={{fontFamily: 'Grenze Gotisch', color: "white"}} href="#">The Blog App</h1>
<div className="right"></div>
                <input placeholder="Search for blog" value={val} onChange={(e) => setVal(e.target.value)} className="login_btn"/>
                <button type="submit" onClick={handleClick} className="login_btn" style={{marginRight: "60px"}}>Search </button>
                <GoogleLogout
                    clientId="849710855596-d51t3e11tq5oluco0aqpntljill22red.apps.googleusercontent.com"
                    render={(renderProps) => (

                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="login_btn" style={{marginLeft: "50px"}}>
                            Logout
                        </button>
                    )}
                    onLogoutSuccess={logout}
                />

            </nav>)}

        </div>
    )
}

export default Navbar;