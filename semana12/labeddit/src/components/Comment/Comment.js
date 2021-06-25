import React from 'react'
import { AvatarDisplay, CommentBody, CommentDisplay, CommentFooter, CommentHeader, CountVotes, DownArrow, InfoComment, UpArrow, UserAvatar, VoteComment } from './styled';
import arrow from './../../img/arrow2.svg'
import axios from 'axios';
import { URL } from '../../parameters/URL';
import { useContext } from 'react/cjs/react.development';
import LabedditContext from '../../global/LabedditContext';
import { useParams } from 'react-router-dom';

const Comment =(props) =>{
    const {id} = useParams()
    const random = (Math.floor(Math.random() * 100))
    const {getPosts, getComments} = useContext(LabedditContext)
    const commentVote = (commentId, direction) =>{
        axios
            .post(URL+'/comments/'+commentId+'/votes', {direction}, {
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) =>{
                getPosts()
                getComments(id)
                
            })
            .catch((err) =>{
                alert(err.response.data.message)
            })
    }
    const removeVote = (commentId) =>{
        axios
          .delete(URL+'/comments/'+commentId+'/votes', {
            headers:{
              Authorization: localStorage.getItem('token')
            }
          })
          .then((res) =>{
            getPosts()
            getComments(id)
          })
          .catch((err)=>{
            alert(err.response.data.message)
          })
      }

      

    return (

        <CommentDisplay>
            <UserAvatar>
                <AvatarDisplay src={`https://picsum.photos/59/${random}`}/>
            </UserAvatar>
            <InfoComment>
                <CommentHeader>
                    <p><strong>{props.username}</strong></p>
                </CommentHeader>
                <CommentBody>
                    <p>{props.body}</p>
                </CommentBody>
                <CommentFooter>
                    <VoteComment>
                    {props.userVote === 1 ? <UpArrow src={arrow} upVoted={true} onClick={()=> removeVote(props.id)} /> : <UpArrow src={arrow} upVoted={false}  onClick={()=> commentVote(props.id, 1)}/>}
                    </VoteComment >
                    <CountVotes color={props.userVote !== null ? (Number(props.userVote) === 1 ? true : false): null} >{props.voteSum !== null ? props.voteSum : 0}</CountVotes>
                    <VoteComment>
                    {props.userVote === -1 ? <DownArrow src={arrow} downVoted={true} onClick={()=> removeVote(props.id)}/> : <DownArrow src={arrow} downVoted={false} onClick={()=> commentVote(props.id, -1)}/>}
                    </VoteComment>
                </CommentFooter>
            </InfoComment>
        </CommentDisplay>

    );
  };
  
export default Comment