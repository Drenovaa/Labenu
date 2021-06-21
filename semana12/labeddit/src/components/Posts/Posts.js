import React from "react";
import Header from "../../components/Header/Header";
import { CommentContainer, PostBody, PostContainer, PostDisplay, VoteContainer,} from "./styled";

const Posts = () => {
  return (
    <PostBody>
        <VoteContainer>
        </VoteContainer>
        <PostContainer>
            <PostDisplay>
            </PostDisplay>
            <CommentContainer>
            </CommentContainer>
        </PostContainer>
    </PostBody>
  );
};

export default Posts;
