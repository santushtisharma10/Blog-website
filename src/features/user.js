import {createSlice} from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

const user = createSlice( {

    name: "user", 
    initialState: {

        isLoggedIn: false, 
        userData: null, 
        search: "tech", 
        blogData: null
    }, 
    reducers: {

        setLogin: (state, action) => {

            state.isLoggedIn = action.payload;
        }, 
        setUserData: (state, action) => {

            state.userData = action.payload;
        }, 
        setSearch: (state, action) => {

            state.search = action.payload;
        }, 
        setBlogData: (state, action) => {

            state.blogData = action.payload;
        }
    }
});

export const {

    setLogin, setUserData, setSearch, setBlogData
} = user.actions

export const selectLogin = (state) => state.user.isLoggedIn
export const selectUserData = (state) => state.user.userData
export const selectSearch = (state) => state.user.search
export const selectBlogData = (state) => state.user.blogData


export default user.reducer 