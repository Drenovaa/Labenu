import React from 'react'

export default class DadosFim extends React.Component {

  render (){
    return (
    <div className="App">
        <p>4. Por que você não terminou um curso de graduação</p>
        <input/>
        <p>5. Você fez algum curso complementar?</p>
        <select>
            <option>Curso Técnico</option>
            <option>Curso Inglês</option>
            <option>Não fiz curso complementar</option>
        </select>
        <br></br><br></br>
        <div><button onClick={this.props.avancaFormulario} >Avançar</button></div>
    </div>
    );
  }
}

