import React from 'react'
import styled from 'styled-components'
import './styles.css'
// import {EditText, EditTextarea} from 'react-edit-text'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
const LitaDeTarefa = styled.div`
  display:flex;
  justify-content: space-between;
  margin:10px 0px;
  word-break: break-word;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    if(localStorage.getItem ("tarefa")){
      const tarefasSalvasString = localStorage.getItem("tarefa")
      this.setState({tarefas: JSON.parse(tarefasSalvasString)})
    }
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})

  }

  criaTarefa = () => {
    const novaTarefa = {
      texto: this.state.inputValue,
      id: Math.random(),
      completa: false
    
    }
    if(this.state.inputValue === ""){
      return
    }else{
      this.setState({tarefas: [...this.state.tarefas, novaTarefa], inputValue: ""})
    }
  }


  selectTarefa = (id) => {
    const selecaoTarefa = this.state.tarefas.filter((tarefa) =>{
      if(tarefa.id === id){
        tarefa.completa = !tarefa.completa;
      }
      return tarefa
    })
    this.setState({tarefas: selecaoTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  apagarTarefa = (idTarefa) =>{
      const deletarTarefa = [...this.state.tarefas]
      const tarefaDeletada = deletarTarefa.filter((tarefa) =>{
        return tarefa.id !== idTarefa
      })
      this.setState({tarefas: tarefaDeletada})
  }

  limpaTudo=(tarefas)=>{
    this.setState({tarefas: []})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <LitaDeTarefa>
                <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.apagarTarefa(tarefa.id)}>X</button>
              </LitaDeTarefa>
            )
          })}
          
        </TarefaList>
        <button onClick={() => this.limpaTudo(listaFiltrada)}>Limpar tarefas</button>
      </div>
    )
  }
}

export default App
