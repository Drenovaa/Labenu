import { BackVideo } from "./styled"
import React from 'react'
import backgroundVideo from './../../img/LoginBack.mp4'

const BackgroundVideo = () =>{
    return(
    <BackVideo autoPlay loop muted>
        <source src={backgroundVideo} />
    </BackVideo>)
}

export default BackgroundVideo