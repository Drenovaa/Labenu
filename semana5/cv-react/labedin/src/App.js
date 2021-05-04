import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Competencias from './components/Competencias/Competencias';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Guilherme Rodrigues" 
          descricao="Saudações, me chamo Guilherme. Um sonhador, porém com as expectativas baixas, fascinado por tecnologia, atualmente sou estudante de desenvolvimento full stack e Engenharia da computação"
        />
        
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
          imagem="https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png" 
          descricao="Av. Lugar nenhum"
        />
          <CardPequeno
          imagem="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png" 
          descricao="oemailfake@email.fa.ke"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png" 
          nome="Labenu" 
          descricao="Estudante de desenvolvimento full stack, criando aplicações web!" 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/547415609764347904/8hgUnhoF_400x400.png" 
          nome="J.ASSY" 
          descricao="Técnico em Desenvolvimento de produtos mecânicos." 
        />
        
        <h2>Habilidades</h2>
        <Competencias 
          imagem="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/96-html5-512.png" 
          texto="HTML5"
        />
        <Competencias 
          imagem="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" 
          texto="CSS"
        />
        <Competencias 
          imagem="https://banner2.cleanpng.com/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg" 
          texto="JavaScript"
        />       
        <Competencias 
        imagem="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
        texto="React"
      />
      </div>

      

      <div className="page-section-container"> 
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook"
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
          <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/25/25231.png" 
          texto="GitHub" 
        />         
      </div>
    </div>
  );
}

export default App;
