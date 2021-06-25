import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import { BackgroundDisplay, BodyHome, HomeDisplay} from './styled';
import Posts from '../../components/Posts/Posts'
import { useHistory } from 'react-router-dom';
import Loading from './../../components/Loading/Loading'
import Dropdown from '../../components/Dropdown/Dropdown';
import { BackToTop, ButtonA } from '../../components/main/main';
import LabedditContext from '../../global/LabedditContext';
import ButtonTop from '../../components/ButtonTop/ButtonTop';

const Home = () => {
    const history = useHistory()
    const [newPost, setNewPost] = useState(false)
    const {post} = useContext(LabedditContext)


    const {getPosts} = useContext(LabedditContext)


    useEffect(() =>{
        if(localStorage.getItem('token')){   
            getPosts()
        }else{
            history.replace('/')
        }
    },[])
    
  
    const showInput = () =>{
        setNewPost(!newPost)
    }

    let createPost
    if(newPost){
        createPost = <Dropdown/>
    }

    const showPost = post.map((view) =>{
        return(
            <Posts
                post={view}
                effect={true}
                body={view.body}
                commentCount={view.commentCount}
                createdAt={view.createdAt}
                id={view.id}
                title={view.title}
                userId={view.userId}
                userVote={view.userVote}
                voteSum={view.voteSum}
                username={view.username}
            />
        )
    })

    return (
        <BodyHome>
            <Header/>
            <BackgroundDisplay>
                <HomeDisplay>
                    <ButtonA onClick={showInput}>{newPost ? "Fechar" : "Novo Post"}</ButtonA>
                    {createPost}
                    {post.length !==0 ? showPost : <Loading/>}
                    <ButtonTop/>
                </HomeDisplay>
            </BackgroundDisplay>
        </BodyHome>
    );
  };
  
  export default Home
