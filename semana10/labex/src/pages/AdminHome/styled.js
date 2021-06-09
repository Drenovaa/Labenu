import styled from "styled-components";

export const CardTrip = styled.div`
    margin: auto;
    margin-top: 50px;
    width: 60%;

`

 export const TripDisplay =styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
    :hover{
        background-color: rgba(33, 33, 33, 0.8);
        cursor: pointer;
        color: #b08a4b;
        border-left: 1px solid rgba(176, 138, 75, 0.8);
    }

 `
export const CreateTripDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

`