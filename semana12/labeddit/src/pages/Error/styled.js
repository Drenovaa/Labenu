
import React from 'react'
import styled from 'styled-components'
import { BackVideo } from '../../components/main/main'
import backgroundVideo from './../../img/error.mp4'

const VideoError = () =>{
    return(
    <BackVideo autoPlay loop muted>
        <source src={backgroundVideo} />
    </BackVideo>)
}

export default VideoError

export const SelectAction = styled.div`
    display: flex;
    column-gap: 40px;
    margin-top: 100px;
    margin-left: 20px;
`

export const ErrorDisplay = styled.div`
    display: flex;
    align-items: flex-end;
    z-index: 1;
    justify-content: space-evenly;
`