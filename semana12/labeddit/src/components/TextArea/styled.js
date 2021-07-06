import styled from "styled-components";


export const TextDisplay = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    width: 80%;
    min-height: 15vh;
    resize: none;
    text-align: center;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    outline: none;
    border: 1px solid #cf0299;
    :focus{
        box-shadow: 0 0 .2rem #fff,
                    0 0 1.7rem #cf0299,
                    0 0 1.0rem #7900bf;
    }
`

export const CommentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media screen and (max-device-width: 700px){
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`
