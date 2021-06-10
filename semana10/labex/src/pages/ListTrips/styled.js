import styled from "styled-components";


export const TripDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;
    margin-bottom: 20px;
`

export const CardTrip = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 500px;
    min-height: 280px;
    background-color: rgba(33, 33, 33, 0.8);
    border: 1px solid rgba(221, 221, 221, 0.8);
    border-radius: 20px;
`

export const TripText = styled.p`
    margin: auto;
    margin-top:10px;
    margin-bottom: 10px;
    width: 70%;
    font-size: 18px;
`

export const NameTrip = styled.h3`
    text-align: center;
    margin-bottom: 2px;
`
export const HeaderUser = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

`
export const UserButton = styled.div`
`