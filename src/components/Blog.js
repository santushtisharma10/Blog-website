import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setBlogData, setSearch } from "../features/user";

const Blog = ()=> {

    const search = useSelector(selectSearch)
    const url = `https://gnews.io/api/v4/search?q=${search}&token=18671add03702a17e0bd508807eb30b1`//API-Token

    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState()
    const [load, setLoad] = useState(true)

    useEffect(()=> {

        fetch(url)
        .then((res)=> res.json())
        .then((res)=> { 
            console.log(res.articles)
            dispatch(setBlogData(res))
            setBlogs(res)      
            setLoad(false)      
         })
    }, [search])

    return(
        <div> 
           {blogs?.articles?.map(blog => (

               <div></div>
           ))
           }
        </div>
    )
}

export default Blog