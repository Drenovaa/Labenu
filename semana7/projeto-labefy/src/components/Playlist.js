import axios from "axios"
import styled from "styled-components"
import React from 'react';


const header = {
    headers: {
      Authorization: "guilherme-rodrigues-paiva"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"

export default class Playlist extends React.Component{

    state = {
        tracks:[]
    }

    componentDidMount(){
        this.getTracks()
    }


    getTracks = () => {
        axios
        .get(url+this.props.playlist.id+`/tracks/`, header)
        .then((res) =>{
            this.setState({tracks: res.data.result.tracks})
        })
        .catch((err) =>{
            alert(err)
        })
      }

      removeTrack = (trackId) =>{
        if (window.confirm("Deseja apagar esta musica?")){
            console.log(trackId)
          axios
          .delete(url+this.props.playlist.id+`/tracks/`+trackId, header)
          .then((res) =>{
            this.getTracks()
          })
        }
      }

    render(){
        return(
            <PlaylistView>
                <ButtonAddMusic onClick={this.props.enterNewMusic}> + Musica </ButtonAddMusic>
                <PlaylistName>{this.props.playlist.name}</PlaylistName>
                {this.state.tracks.map((track) =>{
                    return(
                        <MusicsDiv>
                            <MusicPlay>
                                <MusicName>{track.name}</MusicName>
                                <p><audio controls src={track.url}></audio></p>
                            </MusicPlay>
                            <RemoveTrack onClick={()=> this.removeTrack(track.id)}> <img src={"https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"}/></RemoveTrack>
                        </MusicsDiv>
                )
                })}

                
            </PlaylistView>
        )
            
    }
}

const ButtonAddMusic = styled.button`
    padding: 10px;
`

const PlaylistName = styled.h1`
    text-align: center;
`

const MusicName = styled.h3`
    margin-right: 10px;
    text-align: center;
`

const PlaylistView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
`
const MusicPlay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const MusicsDiv = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover{
        background-color: #808080;
    }
`
const RemoveTrack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
        height: 30px;
    }
    :hover{
        opacity: 70%;
    }
` 