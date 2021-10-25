import {createSlice} from "@reduxjs/toolkit"

const user = createSlice( {

    name: "user", 
    initialState: {

        isLoggedIn: false, 
        userData: null, 
        search: "tech"
    }
}
)