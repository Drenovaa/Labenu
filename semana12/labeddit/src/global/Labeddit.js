import React, { useEffect, useState } from "react";
import axios from "axios";
import LabedditContext from "./LabedditContext";
import { URL } from "../parameters/URL";

export const Labeddit = (props) =>{
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [pagination, setPagination] = useState(1)

    useEffect(() =>{
        getPosts()
        console.log("Deu")
    },[pagination])


    const getPosts = () =>{
        const limit = 30*(pagination-1)
        axios
            .get(`${URL}/posts?page=${pagination}&size=${limit}`, {
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) =>{
                console.log(err.response)
        })
    }

    const getComments = (id) => {
        axios
            .get(`${URL}/posts/${id}/comments?page=1&size=30`,{
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setComments(res.data)
            })
            .catch((err) =>{
                console.log(err.response)
        })
    }


        const data = {
            post,
            setPost,
            pagination,
            setPagination,
            getPosts,
            comments,
            setComments,
            getComments,
        }

    return(
        <LabedditContext.Provider value={data}>
            {props.children}
        </LabedditContext.Provider>

    )

}