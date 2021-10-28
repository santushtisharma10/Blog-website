import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, setLogin, setUserData } from "../features/user";

const Home = () => {

    const dispatch = useDispatch()
    const login = (response) => {

        console.log(response)
        dispatch(setLogin(true))
        dispatch(setUserData(response.profileObj))
    }
    const isLogin = useSelector(selectLogin)

    return(

        <div>
            
            {!isLogin && (<div style={{textAlign: "center"}}>
<br /><br /><br /><br /><br /><br /><br /><br />
                <h1 className="title">The Blog App</h1>
            <GoogleLogin 
            clientId="849710855596-d51t3e11tq5oluco0aqpntljill22red.apps.googleusercontent.com"
            render = {(renderProps) => (

                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="login_btn">
                    Login with Google
                </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
            />
            <br /><br /><br /><br /><br /><br />
            </div>) }
           
            
        </div>
    )

}

export default Home