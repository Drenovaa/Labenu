import styled from "styled-components";

export const CommentDisplay = styled.div`
    padding-top: 10px;
    background-color: #151515;
    display: flex;
    margin-left: 10px;
    p{
        margin-top: 2px;
    }
`
export const UserAvatar = styled.div`

`
export const AvatarDisplay = styled.img`
    border-radius: 50%;
    width: 28px;
    height: 28px;
`

export const InfoComment = styled.div`
    margin-left: 20px;
`

export const CommentHeader = styled.div`
`
export const CommentBody = styled.div`
    p{
        word-break: break-word;
    }
`
export const CommentFooter = styled.div`
    display: flex;
    align-items: center;
`
export const VoteComment = styled.div`
`
export const CountVotes = styled.div`
    color: ${props => props.color === null ? `#fff` : (props.color) === "1" ? `#ff901f` : `#04c4ca`};
    margin-left: 10px;
    margin-right: 10px;
`

export const UpArrow = styled.img`
    position: relative;
    z-index: 100;
    max-width: ${props => props.upVoted ? `25px` : `20px`};
    transform: rotate(270deg);
    filter: ${props => props.upVoted === "true" ? `invert(52%) sepia(85%) saturate(489%) hue-rotate(343deg) brightness(107%) contrast(102%);` : `invert(14%) sepia(82%) saturate(5837%) hue-rotate(307deg) brightness(86%) contrast(104%)` };
    :hover{
        filter: invert(14%) sepia(82%) saturate(5837%) hue-rotate(307deg) brightness(600%) contrast(104%);
    }
`

export const DownArrow = styled.img`
    position: relative;
    z-index: 100;
    max-width: ${props => props.downVoted ? `25px` : `20px`};
    transform: rotate(90deg);
    filter: ${props => props.downVoted === "true" ?  `invert(67%) sepia(63%) saturate(2553%) hue-rotate(134deg) brightness(91%) contrast(97%);`:`invert(13%) sepia(66%) saturate(7443%) hue-rotate(279deg) brightness(75%) contrast(117%)`};
    :hover{
        filter: invert(13%) sepia(66%) saturate(7443%) hue-rotate(279deg) brightness(50%) contrast(117%);
    }
`
