import axios from "axios"
import styled from "styled-components"
import React from 'react';

const header = {
    headers: {
      Authorization: "guilherme-rodrigues-paiva"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"


export default class AddPlaylist extends React.Component{

    state = {
        newPlaylist: ""
    }

    getNewPlaylist = (event) =>{
        this.setState({newPlaylist: event.target.value})
    }

    createNewPlaylist = () =>{
        const body = {
            name: this.state.newPlaylist
        }
        axios
            .post(url, body, header)
            .then(() =>{
                alert("Nova playlist foi adicionada")
                this.setState({newPlaylist: ""})
            })
            .catch((err) =>{
                alert(err)
            })
    }





    render(){
        return(
                <PlaylistAdd>
                    <TextShow>Nova playlist</TextShow>
                    <InputPlaylist>
                        <input
                            value={this.state.newPlaylist}
                            onChange={this.getNewPlaylist}
                            />
                        <button onClick={this.createNewPlaylist}>Criar</button>
                    </InputPlaylist>
                </PlaylistAdd>

        )
    }
}

const TextShow = styled.h1`
    text-align: center;
`

const PlaylistAdd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 8;
`

const InputPlaylist = styled.div`
    display: flex;
`