import React from "react";
import { useHistory } from "react-router-dom";
import { goToPostDetail } from "../../routes/coordinator";
import { BackArrow, CommentContainer, DownArrow, HeaderPost, PostBody, PostContainer, PostContent, PostDisplay, UpArrow, VoteContainer, } from "./styled";
import arrow from './../../img/arrow2.svg'
import { URL } from "../../parameters/URL";
import axios from "axios";
import { useContext } from "react/cjs/react.development";
import LabedditContext from "../../global/LabedditContext";



const Posts = (props) => {
  const history = useHistory()
  const effect = props.effect
  const {getPosts} = useContext(LabedditContext)

  const postVote = (postId, direction) => {
    axios
      .post(URL+'/posts/'+postId+'/votes', {direction} ,{
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) =>{
        getPosts()
      })
      .catch((err) =>{
        alert(err.response.data.message)
      })
  }

  const removeVote = (postId) =>{
    axios
      .delete(URL+'/posts/'+postId+'/votes', {
        headers:{
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) =>{
        getPosts()
      })
      .catch((err)=>{
        alert(err.response.data.message)
      })
  }



  return (
    <PostBody effect={effect}>
        <VoteContainer effect={effect} color={props.userVote !== null ? (props.userVote === 1 ? true : false): null}>
          <BackArrow>
            {props.userVote === 1 ? <UpArrow src={arrow} upVoted={true} onClick={()=> removeVote(props.id)} /> : <UpArrow src={arrow} upVoted={false}  onClick={()=> postVote(props.id, 1)}/>}
          </BackArrow>
          <p>{props.voteSum !== null ? props.voteSum : 0}</p>
          <BackArrow>
            {props.userVote === -1 ? <DownArrow src={arrow} downVoted={true} onClick={()=> removeVote(props.id)}/> : <DownArrow src={arrow} downVoted={false} onClick={()=> postVote(props.id, -1)}/>}
          </BackArrow>
        </VoteContainer>
      <PostContainer onClick={() => props.details ? (null) : goToPostDetail(history, props.id)}>
        <PostDisplay>
          <HeaderPost>
            <span>posted by  <strong>u/{props.username}</strong></span>
          </HeaderPost>
          <h2>{props.title}</h2>
          <PostContent>
            <p>{props.body}</p>
          </PostContent>
        </PostDisplay>
        <CommentContainer effect={effect}>
          <p>{props.commentCount !== null ? props.commentCount : 0} comentários</p>
        </CommentContainer>
      </PostContainer>
    </PostBody>
  );
};

export default Posts;
