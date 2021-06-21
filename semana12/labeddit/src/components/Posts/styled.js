import styled from "styled-components"

export const PostBody = styled.div`
display: flex;
width: 900px;
height: 400px;
margin-top: 30px;
border: 1px solid #f98751;
background-color: #202020;
border-radius: 10px;
:hover{
    border: 1px solid #cf0299;
    cursor: pointer;
    box-shadow: 0 0 1px #fff,
          0 0 8px #fff,
          0 0 7px #7900bf,
          0 0 5px #7900bf,
          0 0 6px #7900bf,
          0 0 8px #7900bf;
}
` 
export const VoteContainer = styled.div`
width: 8%;
height: 100%;
background-color: #151515;
border-radius: 10px;
`
export const PostContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
border-radius: 10px;


`
export const PostDisplay = styled.div`
width: 100%;
height: 85%;
border-radius: 10px;
`

export const CommentContainer = styled.div`
width: 100%;
height: 15%;
border-radius: 10px;
`