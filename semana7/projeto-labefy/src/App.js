import './App.css';
import axios from "axios"
import styled from "styled-components"
import React from 'react';
import Home from './components/Home';
import AddPlaylist from './components/AddPlaylist';
import Playlist from "./components/Playlist";
import AddMusic from "./components/AddMusic";


export default class App extends React.Component {
    state = {
      page: "home",
      playlist:{}
    };
  

  renderPage = () =>{
    switch (this.state.page){
      case "home":
        return <Home
        enterList={this.enterList}
        />
      case "addPlaylist":
        return <AddPlaylist/>
      case "playlist":
        return <Playlist
          infoList={this.enterList}
          playlist={this.state.playlist}
          enterNewMusic={this.enterNewMusic}
        />
      case "addMusic":
          return <AddMusic
            playlist={this.state.playlist}
            back={this.enterList}
          />

    }
  }

  enterNewMusic = (add) =>{
    this.setState({page: "addMusic"})
  }

  enterList = (page, playlist) =>{
    this.setState({page: page, playlist: playlist})
  }
  callHome = () =>{
    this.setState({page: "home"})
  }
  callAddPlay = () =>{
    this.setState({page: "addPlaylist"})
  }

  render(){
    return(
      <AppCont>
          {this.renderPage()}
        <NavDisplay>
          <NavButtons onClick={this.callHome}>Home</NavButtons>
          <NavButtons onClick={this.callAddPlay}>Nova Playlist</NavButtons>
        </NavDisplay>

      </AppCont>
    )
  }
}

const AppCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90% 10%;
  width: 100vw;
  min-height: 100vh;
  margin: auto;
  background-color: darkgray;
  overflow: auto;
`
const NavButtons = styled.button`
  display: flex;
`

const NavDisplay = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
`