import React from 'react'

import surplus from '../assets/data/surplus';
import Itemsurplus from '../UI/Itemsurplus';


const Surplus = () => {
  return (
  <>
    <div>Surplus!</div>


    <div> 
   {surplus.map((item) =>(
   <Itemsurplus item = {item} key = {item.id}/>))}
    </div>
    </>
  )
}

export default Surplus;