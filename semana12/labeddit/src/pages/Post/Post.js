import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import Posts from '../../components/Posts/Posts';
import { BackgroundDisplay } from '../Home/styled';
import { BodyPost, Comments, CommentSection, DetailPage, DetailPost, NewComment, PostView } from './styled';
import Comment from './../../components/Comment/Comment'
import TextArea from './../../components/TextArea/TextArea'
import LabedditContext from '../../global/LabedditContext';
import ButtonTop from '../../components/ButtonTop/ButtonTop';
import { ButtonA } from '../../components/main/main';
import { goToLastPage } from '../../routes/coordinator';

export function PostPage (){
    const {id} = useParams()
    const history = useHistory()
    const {comments, getComments, post} = useContext(LabedditContext)

    useEffect(() =>{
        if(localStorage.getItem('token')){
            window.scrollTo(0, 0)
            getComments(id)
        }else{
            history.replace('/')
        }
    },[])

    const bodyPost = post.find(idPost => idPost.id === id)

    const commentList = comments.map((comment) =>{
        return(
            <Comment 
                key={comment.id}
                body={comment.body}
                username={comment.username}
                voteSum={comment.voteSum}
                id={comment.id}
                userVote={comment.userVote}
            />)
    })

    return (
        <BodyPost>
            <Header/>
            <BackgroundDisplay>
                <PostView>
                    <ButtonA onClick={()=> goToLastPage(history)}>Voltar</ButtonA>
                    {bodyPost && commentList ? (
                    <DetailPage>
                        <DetailPost>
                            <Posts
                                details={false}
                                body={bodyPost.body}
                                commentCount={bodyPost.commentCount}
                                createdAt={bodyPost.createdAt}
                                id={bodyPost.id}
                                title={bodyPost.title}
                                userId={bodyPost.userId}
                                userVote={bodyPost.userVote}
                                voteSum={bodyPost.voteSum}
                                username={bodyPost.username}
                            />
                        </DetailPost>
                        <CommentSection>
                            <NewComment>
                                <TextArea
                                    id={bodyPost.id}
                                />
                            </NewComment>
                            <Comments>
                                {commentList}
                            </Comments>
                        </CommentSection>
                        <ButtonTop/>
                    </DetailPage>
                    ): (<Loading/>)}
                </PostView>
            </BackgroundDisplay>
        </BodyPost>
    );
  };

  export default PostPage
