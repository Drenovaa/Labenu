import "./App.css";

function App() {

  const titulo = "Titulo do video"

  function userEnter() {
    let user = prompt("Digite o nome do seu Usuário")
    if (user === ""){
      alert("Por favor insira um nome de usuário valido")
    }else{
      alert(`Bem vindo ${user}`) 
    }
  }

  function pesquisa (){
    alert("Pesquisa iniciada")
  }

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div className="App">
      <div className="tela-inteira">
        <header>
          <h1>Lab Tube</h1>
          <div id="pesquisa">
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            <img className="pesquisa-lupa" src="https://images.vexels.com/media/users/3/143356/isolated/preview/64e14fe0195557e3f18ea3becba3169b-lupa-de-pesquisa-by-vexels.png" alt="" onClick={pesquisa} />
          </div>
          <img className="user-place" src="https://www.fundecitrus.com.br/img/user_perf.png" alt="" onClick={userEnter} />
        </header>
        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Explorar</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Biblioteca</li>
              <li className="botoes-meunu-vertical">Histórico</li>
              <li className="botoes-meunu-vertical">Meus videos</li>
              <li className="botoes-meunu-vertical">Assistir mais tarde</li>
              <li className="botoes-meunu-vertical">Marcados como gostei</li>
              <hr />
            </ul>
            <footer>
                <h4>Oi! Eu moro no footer!</h4>
            </footer>
          </nav>
          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt=""/>
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
