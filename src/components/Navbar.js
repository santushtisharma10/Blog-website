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
        <div style={{ backgroundColor: "black" }}>
            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="#">The Blog App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                       
                        {isLogin && (
                            <div>
                                <input placeholder="Search for blog" value={val} onChange={(e) => setVal(e.target.value)} />
                                <button type="submit" onClick={handleClick}>Search </button>
                            </div>)}

                        {isLogin && (

                            <GoogleLogout
                                clientId="849710855596-d51t3e11tq5oluco0aqpntljill22red.apps.googleusercontent.com"
                                render={(renderProps) => (

                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="logout_page">
                                        Logout
                                    </button>
                                )}
                                onLogoutSuccess={logout}

                            />
                        )}

                    </ul>
                </div>
            </nav>



        </div>
    )
}

export default Navbar;