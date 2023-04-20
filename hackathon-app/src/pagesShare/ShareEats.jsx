import React from 'react'

import surplus from '../assets/data/surplus';
import Itemsurplus from '../UI/Itemsurplus';



const ShareEats = () => {
  return (
    <>
 
    <h2>News Feed</h2>
    <p>whos the quick brown fosx jumo over the lazy dogj</p>

    <h3> foods</h3>

    <div>
    {surplus.map((item) =>(
   <Itemsurplus item = {item} key = {item.id}/>))}
    </div>


    </>
  )
}

export default ShareEats;