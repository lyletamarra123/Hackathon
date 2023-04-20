import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ShareEat from '../pages/ShareEat';
import Documentation from '../pages/Documentation';
import CostumerStories from '../pages/CostumerStories';
import Login from '../pages/Login';
import ShareEats from '../pagesShare/ShareEats';
import Profile from '../pagesShare/Profile';
import Ask from '../pagesShare/Ask';
import Basket from '../pagesShare/Basket';
import Message from '../pagesShare/Message';
import Give from '../pagesShare/Give';
import Locate from '../pagesShare/Locate';
import Settings from '../pagesShare/Settings';
import Edition from '../pages/Edition';

const Routers = () => {
  return (
    <>
   <Routes>
    <Route path = "/" element = {<Navigate to ="/shareEat"/>}/>
    <Route path = "/shareEat" element = {<ShareEat/>} />
    <Route path = "/documentation" element = {<Documentation/>} />
    <Route path = "/costumerStories" element = {<CostumerStories/>} />
    <Route path = "/Login" element = {<Login/>} />
    <Route path = "edition/shareEats" element = {<ShareEats/>}/>
    <Route path = "/profile" element = {<Profile/>}/>
    <Route path = "/ask" element = {<Ask/>}/>
    <Route path = "/basket" element = {<Basket/>}/>
    <Route path = "/message" element = {<Message/>}/>
    <Route path = "/give" element = {<Give/>}/>
    <Route path = "/locate" element = {<Locate/>}/>
    <Route path = "/settings" element = {<Settings/>}/>
    <Route path = "/edition" element = {<Edition/>}/>
   </Routes>
   </>
  );
}

export default Routers;