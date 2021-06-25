import styled from "styled-components";

export const BodyPost = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
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
export const CreateNewPost = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    width: 80%;
`
export const FormNewPost = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 60%;

`

export const ButtonNewPost = styled.button`
    height: 5vh;
    align-self: center;
    width: 50%;
    font-size: 16px;
    color: #000;
    background: #cf0299;
    border: 1px solid rgba(20, 20, 20, 0.8);
    box-sizing: border-box;
    border-radius: 10px;
    :hover{
        cursor: pointer;
        background-color: #cf0299;
        color: #000;
        border: 1px solid #000;
        box-shadow: 0 0 .2rem #fff,
                    0 0 1.0rem #cf0299;
        transition: box-shadow 100ms;
    }
`

export const InputTittle = styled.input`
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    background-color: #000;
    color: #fff;
    outline: none;
    border: 1px solid #cf0299;
    :focus{
        box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 1.7rem #cf0299,
              0 0 0.8rem #cf0299,
              0 0 1.5rem #7900bf,
              0 0 1.0rem #7900bf;
    }

`