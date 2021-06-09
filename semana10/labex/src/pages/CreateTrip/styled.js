import styled from "styled-components";



export const InputAddTrip = styled.input`
    margin-top: 20px;
    font-family: Ubuntu;
    outline: none;
    font-size: 18px;
    text-align: center;
    color: white;
    width: 100%;
    height: 65px;
    background: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    box-sizing: border-box;
    border-radius: 30px;
    ::-webkit-inner-spin-button{ 
        appearance: none;
        margin: 0; 
    }
`

export const SelectDisplay = styled.select`
    margin-top: 20px;
    font-family: Ubuntu;
    outline: none;
    font-size: 18px;
    color: white;
    width: 100%;
    height: 65px;
    background: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    box-sizing: border-box;
    border-radius: 10px;
    text-align-last:center;
`

export const OptionDisplay = styled.option`
    background: rgba(33, 33, 33, 0.8);
    text-align: center;
`

export const DivSelect = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;

`
export const PageName = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`