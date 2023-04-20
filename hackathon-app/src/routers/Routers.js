import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import Surplus from '../pages/Surplus';
import Sell from '../pages/Sell';
import Buy from '../pages/Buy';

const Routers = () => {
  return (
   <Routes>
    <Route path = "/" element = {<Navigate to ="/home"/>}/>
    <Route path = "/home" element = {<Home/>} />
    <Route path = "/buy" element = {<Buy/>} />
    <Route path = "sell" element = {<Sell/>} />
    <Route path = "/surplus" element = {<Surplus/>} />
   </Routes>
  );
}

export default Routers;