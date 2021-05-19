import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React from 'react';


const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component{

  state = {
    inputName : "",
    email: "",
    users:[],
    display: false,
    // editDisplay: false,
    // editName:"",
    // editEmail:""
  }

  componentDidMount(){
    this.getUsers()
  }

  showUsers = () => {
    this.setState({
      display: !this.state.display
    })
  }

  // changeUser = () => {
  //   this.setState({
  //     editDisplay: !this.state.editDisplay
  //   })
  // }

  getUsers = ()=>{
    const header = {
      headers: {
        Authorization: "guilherme-rodrigues-paiva"
      }
    }
    axios
      .get(BASE_URL, header)
      .then((res) =>{
        this.setState ({users: res.data})
        console.log(res.data)
      })
      .catch((error) =>{
        alert(error)
      })
  }
  
  createUser = () => {
    if(this.state.inputName !== "" && this.state.email !== ""){
      if(window.confirm ("Deseja criar um novo usuario?")){
        const header = {
          headers: {
            Authorization: "guilherme-rodrigues-paiva"
          }
        }
        const body = {
          name: this.state.inputName,
          email: this.state.email
        }
    
        axios
          .post(BASE_URL, body, header)
          .then((res)=>{
            alert("Adicionando novo usuário")
            this.setState({inputName: "", email: ""})
            this.getUsers()
          })
          .catch((error)=>{
            alert(error)
    
          })
      }else{
        return
      }
    }else{
      alert("Todos os dados precisam ser preenchidos antes de continuar")
    }
  }

  deleteUser = (id)=>{
    const header = {
      headers: {
        Authorization: "guilherme-rodrigues-paiva"
      }
    }
    axios
      .delete(BASE_URL+`/${id}`, header)
      .then((res) =>{
        this.getUsers()
        
      })
      .catch((error) =>{
        alert(error)
      })
  }

  editUser = (id)=>{
    const header = {
      headers: {
        Authorization: "guilherme-rodrigues-paiva"
      }
    }
    const body = {
      name: this.state.editName,
      email: this.state.editEmail
    }
    axios
      .put(BASE_URL+`/${id}`, header, body)
      .then((data) =>{
        this.setState({editName: "", editEmail: ""})
        this.getUsers()
        
      })
      .catch((error) =>{
        console.log(error)
      })
  }

  getUserName = (name) =>{
    this.setState({inputName: name.target.value})
  }
  getUserEmail = (email) =>{
    this.setState({email: email.target.value})
  }

  // editUserName = (name) =>{
  //   this.setState({editName: name.target.value})
  // }
  // editUserEmail = (email) =>{
  //   this.setState({editEmail: email.target.value})
  // }

  render(){
    // let userEdit
    // if(this.state.editDisplay){
    //   userEdit = <div>
    //   <p>Digite as alterações do usuario</p>
    //   <input
    //   placeholder="nome"
    //   value = {this.state.inputName}
    //   onChange={this.getUserName}
    // />
    // <input
    //   placeholder="e-mail"
    //   value = {this.state.email}
    //   onChange={this.getUserEmail}
    // />
    // <br />
    // <button onClick={this.createUser}>Enviar</button>
    // <br /></div>
    // }

    const usersList = this.state.users.map((user) =>{
      return <div key={user.id}>
        <li onClick={this.changeUser}>{user.name}<button onClick={()=> this.deleteUser(user.id)}>X</button></li>
          <br/><br/>
          {/* {userEdit} */}
        </div>
        
    })
    let showUsers
    if(this.state.display){
      showUsers = <div>{usersList}</div>
    }
  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="nome"
          value = {this.state.inputName}
          onChange={this.getUserName}
        />
        <input
          placeholder="e-mail"
          value = {this.state.email}
          onChange={this.getUserEmail}
        />
        <br />
        <button onClick={this.createUser}>Enviar</button>
        <br />
        <button onClick={this.showUsers}>Usuarios cadastrados</button>
        <div>
          {showUsers}
        </div>
      </header>
    </div>
  );
}
}

