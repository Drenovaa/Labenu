import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import { ProfileImg } from "../Home/styled";
import { MainProfile, ProfileDetails, ProfileMain } from "./styled";





export default function Profile (props){
    return (
        <div>
          <Header
            changePage={()=>props.choosePage("matches")}
          />
          <MainProfile>
              <ProfileImg src={props.details.photo}/>
              <ProfileDetails>
                <p>{props.details.name}, {props.details.age}</p>
                <p>{props.details.bio}</p>
              </ProfileDetails>
          </MainProfile>
        </div>
      );
}