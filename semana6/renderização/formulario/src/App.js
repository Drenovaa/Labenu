import React from 'react'
import './App.css';
import DadosGerais from './components/DadosGerais';
import DadosFim from './components/DadosFim';
import DadosFormacao from './components/DadosFormacao';
import Fim from './components/Fim';

export default class App extends React.Component {

  state = {
    formulario: "inicio"
  }

  avancaFormulario = () =>{
    if(this.state.formulario === "inicio"){
      this.setState({formulario: "formação"})
    }else if (this.state.formulario === "formação"){
      this.setState({formulario: "conclusão"})
    }else if(this.state.formulario === "conclusão"){
      this.setState({formulario: "finalizar"})
    }
  }
  
  
  render (){
    const paginaFormulario = () =>{
      switch (this.state.formulario){
        case "inicio":
          return <DadosGerais avancaFormulario={this.avancaFormulario}/>
        case "formação":
          return <DadosFormacao avancaFormulario={this.avancaFormulario}/>
        case "conclusão":
          return <DadosFim avancaFormulario={this.avancaFormulario}/>
        case "finalizar":
          return <Fim/>
      }
    }
    return (
      <div className="App">
        <h1>Formulário</h1>
        {paginaFormulario()}
      </div>
    );
  }
}

