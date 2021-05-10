import React from 'react'

export default class DadosGerais extends React.Component {


  render (){
    return (
    <div className="App">
        <p>1. Qual o seu nome?</p>
        <input/>
        <p>2. Qual a sua idade?</p>
        <input/>
        <p>3. Qual o seu email?</p>
        <input/>
        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
        </select>
        <br></br><br></br>
        <div><button onClick={this.props.avancaFormulario}>Avançar</button></div>
    </div>
    );
  }
}
