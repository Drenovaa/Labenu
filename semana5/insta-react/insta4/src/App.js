import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/175/150'}
        />
          <Post
          nomeUsuario={'joaozinho'}
          fotoUsuario={'https://picsum.photos/56/56'}
          fotoPost={'https://picsum.photos/180/150'}
        />
          <Post
          nomeUsuario={'clarinha'}
          fotoUsuario={'https://picsum.photos/54/54'}
          fotoPost={'https://picsum.photos/210/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
