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
    overflow-y: auto;
    ::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #393939;
        border-radius: 10px;
    }
    ::-webkit-scrollbar{
        width: 15px;
        background-color: #393939;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #212121;
        border-radius: 10px;
        :hover{
            background-color: #000;;
        }
    }
` 
export const Passengers = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: rgba(33, 33, 33, 0.8);
    border-radius: 15px;
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #393939;
        border-radius: 10px;
    }
    ::-webkit-scrollbar{
        width: 15px;
        background-color: #393939;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #212121;
        border-radius: 10px;
        :hover{
            background-color: #000;;
        }
    }

`

export const ButtonBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CandidatesDiv = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    width: 80%;
    flex-direction: column;
    border: 1px solid rgba(176, 138, 75, 0.8);
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;

`
export const ApproveDiv = styled.div`
    display:flex;
    margin: 20px;
    flex-direction: row;
    justify-content: space-evenly;
`
export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HeaderBox = styled.div`
    display: flex;
    justify-content: center;
`