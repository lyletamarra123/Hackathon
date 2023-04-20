import React from 'react'
import myImage from '../assets/all-images/phone.png';
import '../CSS/ShareEat_main.css';

const ShareEat = () => {
  return (
    <div className="container">
      <h2>Sharing food, Sharing love</h2>
      <p>ShareEats brings people together one meal at a time</p>
      <img src={myImage} alt="My Image" className="phone" />
    </div>
  );
}

export default ShareEat;