import styled from "styled-components"

export const ButtonA = styled.button`
    min-height: 30%;
    height: 4vh;
    font-size: 18px;
    color: #cf0299;
    background: rgba(30, 30, 30, 0.8);
    border: 1px solid rgba(121, 0, 191, 0.8);
    box-sizing: border-box;
    border-radius: 30px;
    :hover{
        cursor: pointer;
        color: #000;
        background-color: #cf0299;
        border: 1px solid #000;
        box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 1.7rem #7900bf,
              0 0 0.8rem #7900bf,
              0 0 1.5rem #7900bf,
              0 0 1.0rem #7900bf;
    }
`
export const ButtonB = styled.button`
    min-height: 30%;
    height: 4vh;
    font-size: 18px;
    color: #000;
    background: #cf0299;
    border: 1px solid rgba(20, 20, 20, 0.8);
    box-sizing: border-box;
    border-radius: 30px;
    :hover{
        cursor: pointer;
        background-color: #cf0299;
        color: #000;
        border: 1px solid #000;
        box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 1.7rem #7900bf,
              0 0 0.8rem #7900bf,
              0 0 1.5rem #7900bf,
              0 0 1.0rem #7900bf;
    }
`
export const InputA = styled.input`
    width: 20%;
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