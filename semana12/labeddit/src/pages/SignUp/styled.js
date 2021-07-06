import styled from "styled-components";

export const SingUpDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
`
export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: 100%;
    text-align: center;
`
export const SelectPage = styled.div`
    display: flex;
    column-gap: 40px;
    @media screen and (max-device-width: 700px){
        flex-direction: column-reverse;
        row-gap: 40px;
}
`