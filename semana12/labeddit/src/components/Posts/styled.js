import styled from "styled-components"

export const PostBody = styled.div`
    display: flex;
    width: ${props => props.effect ? `70%` : `90%`};
    height: ${props => props.effect ? `400px` : `100%`};
    margin-top: ${props => props.effect ? `30px` : `0`};
    border: ${props => props.effect ? `1px solid #7900bf;` : `none`};
    background-color: ${props => props.effect ? `#202020` : `#151515` };
    border-radius: ${props => props.effect ?  `10px` : `none`};
    ${props => props.effect ?
    `:hover{
        border: 1px solid #cf0299;
        cursor: pointer;
        box-shadow: 0 0 1px #fff,
            0 0 8px #fff,
            0 0 7px #7900bf,
            0 0 5px #7900bf,
            0 0 6px #7900bf,
            0 0 8px #7900bf;
        transition: box-shadow 300ms;
    }` : ` :hover{}`
    }
` 


export const VoteContainer = styled.div`
    color: ${props => props.color === null ? `#fff` : (Number(props.color) === 1 ? `#ff901f` : `#04c4ca`)};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 8%;
    min-width: 8%;
    height: 100%;
    background-color: ${props => props.effect ? `#151515` : ``};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`
export const PostContainer = styled.div`
    display: flex;
    flex-wrap: w;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-left: 10px;


`
export const PostDisplay = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 85%;
    border-radius: 10px;
    @media screen and (max-device-width: 700px){
        height: 70vh;
    }
`
export const PostContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 90%;
    p{
        word-break: break-word;
    }

`

export const CommentContainer = styled.div`
    width: ${props => props.effect ? `100%` : `90%`};
    height: 15%;
    border-radius: ${props => props.effect ? `10px` : `none`};
    border-bottom: ${props => props.effect ? `none` : `solid 1px gray`};
    @media screen and (max-device-width: 700px){
        height: 30%;
    }

`
export const BackArrow = styled.div`
    position: relative;
    z-index: 1;
`

export const UpArrow = styled.img`
    position: relative;
    z-index: 100;
    margin-top: 10px;
    max-width: 30px;
    transform: rotate(270deg);
    filter: ${props => props.upVoted ? `invert(52%) sepia(85%) saturate(489%) hue-rotate(343deg) brightness(107%) contrast(102%);` : `invert(14%) sepia(82%) saturate(5837%) hue-rotate(307deg) brightness(86%) contrast(104%)` };
    :hover{
        filter: invert(14%) sepia(82%) saturate(5837%) hue-rotate(307deg) brightness(150%) contrast(104%);
    }
`

export const DownArrow = styled.img`
    position: relative;
    z-index: 100;
    margin-top: 10px;
    max-width: 30px;
    transform: rotate(90deg);
    filter: ${props => props.downVoted ? `invert(67%) sepia(63%) saturate(2553%) hue-rotate(134deg) brightness(91%) contrast(97%);`:`invert(13%) sepia(66%) saturate(7443%) hue-rotate(279deg) brightness(75%) contrast(117%)`};
    :hover{
        filter: invert(13%) sepia(66%) saturate(7443%) hue-rotate(279deg) brightness(50%) contrast(117%);
    }
`
export const HeaderPost = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    height: 5%;
`