import axios from "axios"
import styled from "styled-components"
import React from 'react';

const header = {
    headers: {
      Authorization: "guilherme-rodrigues-paiva"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"


export default class AddMusic extends React.Component{

    state = {
        name: "",
        artist:"",
        url:""
    }

    newSongName = (event) =>{
        this.setState({name: event.target.value})
    }
    newSongArtist = (event) =>{
        this.setState({artist: event.target.value})
    }
    newSongUrl = (event) =>{
        this.setState({url: event.target.value})
    }

    addNewSong = () =>{
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios
            .post(url+this.props.playlist.id+`/tracks/`, body, header)
            .then(() =>{
                alert("Nova musica adicionada")
                this.setState({name: "", artist: "", url: ""})
            })
            .catch((err) =>{
                alert(err)
            })
    }

    render(){
        return(
            <PageView>
                <DisplayView>
                    <InputsView>
                        <InputAdd
                            value={this.state.name}
                            onChange={this.newSongName}
                            placeholder={"Nome da musica"}
                            />
                        <InputAdd
                            value={this.state.artist}
                            onChange={this.newSongArtist}
                            placeholder={"Nome do artista"}
                            />
                        <InputAdd
                            value={this.state.url}
                            onChange={this.newSongUrl}
                            placeholder={"Url da musica"}
                            />
                        <AddSong onClick={this.addNewSong}>Adicionar musica</AddSong>
                    </InputsView>
                </DisplayView>
                <div>
                    <BackButton onClick={()=> this.props.back("playlist", this.props.playlist)}>Voltar</BackButton>
                </div>
            </PageView>
        )
    }
}

const PageView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 8;
`

const InputsView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputAdd = styled.input`
    padding: 5px;
    width: 250px;
    text-align: center;
`

const DisplayView = styled.div`
    display: flex;
`

const AddSong = styled.button`
    padding: 10px;
    margin-top: 5px;
`

const BackButton = styled.button`
    margin-top: 50px;
`