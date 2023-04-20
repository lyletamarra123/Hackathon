import React from 'react'

import surplus from '../assets/data/surplus';
import Itemsurplus from '../UI/Itemsurplus';
import EditionNav from '../navigation/EditionNav';



const ShareEats = () => {
  return (
    <>

    <h2>Share Eats Edition</h2> 
    <EditionNav/>

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