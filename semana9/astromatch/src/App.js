import MatchPage from './pages/MatchPage/MatchPage'
import React, { useState } from "react";
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import styled from 'styled-components';


const MainContainer = styled.div`
  width: 400px;
  height: 650px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`

export default function App() {
  const [page, setPage] = useState("home");
  const [details, setDetails] = useState({})

  const changePage = (page) => {
    setPage(page);
  };
  
  const profileInfo = (profile) =>{
    setPage("profile")
    setDetails(profile)
  }

  const renderPage = ()=>{
    switch(page){
      case "matches":
        return (<MatchPage choosePage={changePage} profileInfo={profileInfo} back={changePage}/>)
      case "profile":
        return (<Profile choosePage={changePage} details={details} back={changePage}/>)
      default:
        return (<Home choosePage={changePage}/>)
    }
  }

  const showPage = renderPage()

  return (
    <MainContainer>
      {showPage}
    </MainContainer>
  );
}
