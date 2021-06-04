import axios from "axios";
import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import { BASE_URL } from './../../Parameters'
import {DivMatches, DivLista, FotoPerfil, Clear, ClearContainer, Remove} from './styled'
import trash from '../../img/broken_heart_PNG43.png'




export default function MatchPage (props){

    const [matches, setMatches] = useState([])

    useEffect(() =>{
        getMatches(props.matches)
    },[props.matches])

    const getMatches = () =>{
        axios
          .get(BASE_URL+"matches/")
          .then((res) => setMatches(res.data.matches))
          .catch((err) => alert("Algo deu errado"))
    }

    const reset = () =>{
        if(window.confirm("Tem certeza que deseja apagar os matches?")){
            axios
              .put(BASE_URL+"clear/")
              .then(() => getMatches())
              .catch((err) => alert(err))
        }
    }

    const showMatches = matches.map((match) =>{
        return(
            <DivLista onClick={()=> props.profileInfo(match)}>
                <FotoPerfil src={match.photo}/>
                <p>{match.name}</p>
            </DivLista>
        )
    })

    return (
        <div>
          <Header
            changePage={()=> props.choosePage("home")}
          />
          <DivMatches>
              {showMatches}
          </DivMatches>
          <ClearContainer>
            <Clear onClick={reset} src={trash} alt="apagar"/>
            <Remove>Limpar lista</Remove>
          </ClearContainer>
        </div>
      );
}