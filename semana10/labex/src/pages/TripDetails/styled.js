import styled from "styled-components";

export const TripName = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`
export const TripContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 80%;
`

export const TripInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    background-color: rgba(33, 33, 33, 0.8);
    border-radius: 15px;
    height: 100%;

`
export const TextInfo = styled.p`
    margin: auto;
    margin-top:10px;
    margin-bottom: 10px;
    width: 70%;
    font-size: 18px;
`

export const Volunteers = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: rgba(33, 33, 33, 0.8);
    border-radius: 15px;
    height: 100%;

` 
export const Passengers = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: rgba(33, 33, 33, 0.8);
    border-radius: 15px;
    height: 100%;

`

export const HeaderPage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    
`

export const ButtonBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`