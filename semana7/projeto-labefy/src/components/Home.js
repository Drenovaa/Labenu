import axios from "axios"
import styled from "styled-components"
import React from 'react';
import Playlist from "./Playlist";

const header = {
    headers: {
      Authorization: "guilherme-rodrigues-paiva"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"


export default class Home extends React.Component{

    state ={
        playlists: []
    }

    componentDidMount(){
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios
            .get(url, header)
            .then((res) =>{
                this.setState({playlists: res.data.result.list})
            })
            .catch((err) =>{
                alert(err.response.data)
            })

    };
        
        
    
    
    deletePlaylist = (id) =>{
        if (window.confirm("Deseja apagar esta playlist?")){
            axios
                .delete(url+`${id}`, header)
                .then((ress) =>{
                    alert("Playlist deletada") 
                    window.location.reload(true)                
                })
                .catch((err) =>{
                    alert(err)
                })
        }else{
            window.location.reload(true)
        }
    }


    render(){

        let playlistImg = 160
        const playlistUser = this.state.playlists.map((play) =>{
            playlistImg = playlistImg+1
            return (
                <OrderList>
                    <PlayList key={play.id} onClick={()=> this.props.enterList("playlist", play)}>
                        <img src={`https://picsum.photos/200/${playlistImg}`}/>
                        <PlayListName>{play.name}</PlayListName>
                    </PlayList>
                    <RemoveList onClick={()=> this.deletePlaylist(play.id)}> <img src={"https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"}/></RemoveList>
                </OrderList>
            )
        })
        return(
        <DisplayFinal>
            <PageInfo>Suas playlists</PageInfo>
            <DisplayList>{playlistUser}</DisplayList>
        </DisplayFinal>

        )
    }
}

const DisplayFinal = styled.div `
    overflow-y: scroll;
`

const PageInfo = styled.h1 `
    text-align: center;
`

const PlayListName = styled.p`
    display: flex;
`

const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    border: 1px solid black;
`

const DisplayList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
`

const PlayList = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    img{
        width: 100%;
        height: 75%;
        margin:0;
        padding:0;
    }
    :hover{
        opacity: 70%;
    }
`
const RemoveList = styled.div`
    display: flex;
    margin: auto;
    margin-top: 2px;
    height: 30px;
    img{
    width: 25px;
    height: 30px;
    }
    :hover{
        opacity: 70%;
    }

`

