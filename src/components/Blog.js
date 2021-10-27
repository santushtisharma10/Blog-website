import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setBlogData, setSearch } from "../features/user";

const Blog = () => {

    const search = useSelector(selectSearch)
    const url = `https://gnews.io/api/v4/search?q=${search}&token=18671add03702a17e0bd508807eb30b1`//API-Token

    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState()
    const [load, setLoad] = useState(true)

    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.articles)
                dispatch(setBlogData(res))
                setBlogs(res)
                setLoad(false)
            })
    }, [search])

    return (
        <div className="row">
            {load === true ? (<div>

                <h1>Loading...</h1>
            </div>) : (<div className="row">

                {blogs?.articles?.map(blog => (

                    <div className="col-md-4" id={blog.id} style={{padding: "10px"}}>
                        <a href={blog.url} target="_blank">
                            <div className="card">
                                <img className="card-image" src={blog.image} height="250px" width="100%" />
                                <div className="card-body">
                                <h3 className="card-title">{blog.title}</h3>
                                <p className="card-text">{blog.description}</p>
                                </div>
                               
                            </div>
                        </a>
                    </div>


                ))
                }
                {blogs?.totalArticles === 0 && (<div>Blogs not found</div>)}

            </div>)}

        </div>

    )
}

export default Blog