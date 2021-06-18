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
    ::-webkit-calendar-picker-indicator {
    filter: invert(1);
    margin-right: 10px;
}
    @media screen and (max-device-width: 1057px){
            border-radius: 20px;
    }
`

export const DivSelect = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    @media screen and (max-device-width: 1057px){
        width: 90%
    }

`
export const PageName = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

export const ButtonsDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-device-width: 1057px){
        margin-bottom: 10px;
    }
`
export const FormContainer = styled.form`
    width: 100%;
`