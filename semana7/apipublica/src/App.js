import './App.css';
import styled from "styled-components"
import axios from "axios"
import React from 'react';


export default class App extends React.Component {
  
  state = {
    launches:[],
    allRockets: [],
    chooseLaunch:"",
    infoLaunch:"",
    logoMission:"",
    moreInfo:"",
    rocketInfo:""
  }
  
  componentDidMount(){
    this.getLaunches()
    this.getRockets()
  }

  getRockets = () =>{
    axios.get("https://api.spacexdata.com/v4/rockets")
    .then((res) =>{
      this.setState({allRockets: res.data})
    })
    .catch((err) =>{
      alert(err)
    })
  }
  
  getLaunches = () =>{
    axios.get("https://api.spacexdata.com/v4/launches")
    .then((val) =>{
      this.setState({launches: val.data})
    })
    .catch((err)=>{
      alert(err)
    })
  }

  selectLaunch = () =>{
    const launchSelected = this.state.launches.map((launch, index) =>{
      return (
        <option value={launch.id} key={index}>{launch.name}</option>
      )
    })
    return launchSelected
  }

  chooseLaunch = (event) =>{
    this.setState({chooseLaunch: event.target.value})
    axios.get(`https://api.spacexdata.com/v4/launches/${event.target.value}`)
    .then((res)=>{
      this.setState({logoMission: res.data.links.patch.small})
      this.setState({moreInfo: res.data.links})
      this.setState({infoLaunch: res.data})
      this.setState({rocketInfo: res.data.rocket}) 
    })
    .catch((err) =>{
      alert(err)
    })
  }

  selectRocket = (event) =>{
    axios.get(`https://api.spacexdata.com/v4/rockets/${this.state.rocketInfo}?`)
    .then((res)=>{
      this.setState({rocketDetails: res.data.flickr_images})
    })
    .catch((err) =>{
      alert(err)
    })
  }

  showLauchSelected = ()=>{
      return(
        <div>
          <p>Nome do lançamento: {this.state.infoLaunch.name}</p>
          <p>Data de lançamento: {this.state.infoLaunch.date_local}</p>
          <p>Logo da missão:  </p>
          <img src={this.state.logoMission}/>
          <br/>
          <p>Link do video de lançamento:</p> <a href={this.state.moreInfo.webcast} target="_blank">{this.state.moreInfo.webcast}</a>
          <hr />
          <p>Imagens do foguete usado para a missão:</p>
          <button onClick={this.selectRocket}>Ver imagens do foguete</button>
          <br />
          <img src={this.state.rocketDetails}/>
        </div>
      )
    }
  
  render(){
    return (
      <div className="App">
        <h1>Space X - Selecione um lançamento para obter mais detalhes</h1>
        <select onChange={this.chooseLaunch} name="Lançamento">
          <option>Nenhuma</option>
          <option value={"all"}>Todos</option>
          {this.selectLaunch()}
        </select>
        {(this.state.chooseLaunch)&&(this.showLauchSelected()) }
      </div>
    );
  }
}


