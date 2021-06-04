import React, {useEffect, useState} from "react";
import axios from 'axios';
import { BASE_URL } from './../../Parameters'
import Header from "../../components/Header/Header";
import { SelectionButton, ButtonsMatch, ContainerProfile, ProfileImg, ProfileText} from "./styled";



export default function Home (props){

    const [profile, setProfile] = useState({})
    


    useEffect(() =>{
        getProfile(props.profile)
    },[props.profile])

    const getProfile = () =>{
        axios
          .get(BASE_URL+"person/")
          .then((res) => setProfile(res.data.profile))
          .catch((err) => alert(err.data))
    }

    const profiles = () =>{
        return(
            <ContainerProfile>
              <div>
                <ProfileImg src={profile.photo} alt={profile.name}/>
              </div>
              <ProfileText>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
              </ProfileText>
            </ContainerProfile>
        )
    }

    const matchPerson = (match) =>{
        const body = {
            id: profile.id,
            choice: match
        }
        axios
          .post(BASE_URL+"choose-person/", body)
          .then((res) => getProfile())
          .catch((err) => alert("Algo de errado não deu certo, tente novamente"))
    }

    return (
        <div className="App">
          <Header
            changePage={()=>props.choosePage("matches")}
          />
          <div>
            {(profile && Object.keys(profile).length !== 0) && profiles()}
          </div>
          <ButtonsMatch>
              <SelectionButton option="false" onClick={()=> matchPerson(false)}>X</SelectionButton>
              <SelectionButton option="true" onClick={()=> matchPerson(true)}>♥</SelectionButton>
          </ButtonsMatch>
        </div>
      );
}