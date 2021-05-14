import React from 'react'

export default class DadosFormacao extends React.Component {

  render (){
    return (
    <div className="App">
        <p>4. Qual o Curso?</p>
        <input/>
        <p>5. Qual o local onde cursou?</p>
        <input/>
        <br></br><br></br>
        <div><button onClick={this.props.avancaFormulario} >Avançar</button></div>
    </div>
    );
  }
}
