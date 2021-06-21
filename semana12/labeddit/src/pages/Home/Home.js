import React from 'react'
import Header from '../../components/Header/Header';
import { BodyHome, CommentContainer, HomeDisplay} from './styled';
import Posts from '../../components/Posts/Posts'

const Home = () => {
    return (
        <BodyHome>
            <Header/>
            <HomeDisplay>
                <Posts/>
            </HomeDisplay>
        </BodyHome>
    );
  };
  
  export default Home
