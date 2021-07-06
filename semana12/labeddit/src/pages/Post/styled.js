import styled from "styled-components"

export const BodyPost = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostView =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 20px;

`
export const DetailPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    width: 70%;
    background-color: #101010;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    .myBtn {
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        height: 5vh;
        width: 5vw;
        font-size: 16px;
        color: #000;
        background: #cf0299;
        border: 1px solid rgba(20, 20, 20, 0.8);
        box-sizing: border-box;
        border-radius: 10px;
        :hover {
            cursor: pointer;
            background-color: #cf0299;
            color: #000;
            border: 1px solid #000;
            box-shadow: 0 0 0.2rem #fff, 0 0 1rem #cf0299;
            transition: box-shadow 100ms;
        }
    }
    @media screen and (max-device-width: 700px){
        .myBtn {
            width: 10vw;
        }
    }
`

export const DetailPost = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50vh;
    border-radius: 10px;
`
export const CommentSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 148.6vh;
    border-radius: 10px;
    @media screen and (max-device-width: 700px){
        margin-top: 100px;
    }
`
export const NewComment = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #151515;
`

export const Comments = styled.div`
    background-color: #151515;
    width: 100%;
    height: 100%;
`