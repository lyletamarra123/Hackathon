import React from 'react'
import { useNavigate } from 'react-router-dom';
import SE from '../assets/all-images/logo.png';
import SEfarms from '../assets/all-images/SEfarms.png';
import SEents from '../assets/all-images/SEents.png';
import bg from '../assets/all-images/home_bg.png';

import '../CSS/Edition.css';
const Edition = () => {

  const navigate = useNavigate();

  return (
    // <>
    // <div> <button onClick = {() => navigate('/edition/shareEats')} >shareEats</button></div>
    // <div><button>shareEatsFarmers</button></div>
    // <div><button>Enterprices</button></div>
    // </>
      <div className="mainContainer">
        <div class="card" onClick = {() => navigate('/edition/shareEats')}>
          <div class="containerCard">
            <img src={SE} alt="enrollsubj" />
            <h4 ><b>ShareEats!</b></h4>
          </div>
        </div>
        <div class="card">
          <div class="containerCard">
            <img src={SEfarms} alt="enrollsubj" />
            <h4><b>ShareEats!Farms</b></h4>
          </div>
        </div>
        <div class="card">
          <div class="containerCard">
            <img src={SEents} alt="enrollsubj" />
            <h4><b>ShareEats!Enterprise</b></h4>
          </div>
        </div>
      </div>
  )
}

export default Edition;