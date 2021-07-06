import styled from "styled-components";


export const MainDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
`
export const FormUser = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: 100%;
    text-align: center;
`

export const SelectPage = styled.div`
    display: flex;
    column-gap: 50px;
    @media screen and (max-device-width: 700px){
        flex-direction: column;
        row-gap: 30px;
}

`
