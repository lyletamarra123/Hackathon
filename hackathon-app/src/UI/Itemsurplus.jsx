import React from 'react'

const Itemsurplus = (props) => {

    const {imgUrl, type, description ,name } = props.item

  return (
   <>
   <div class ="container">
   <div class ="image">
    <img src = {imgUrl} alt =""/>
   </div>
   <div class ="name">
    <h4>{name} </h4>
   </div>
   <div class ="type">
   <h4>{type} </h4>
   </div>
   <div class ="type">
   <h4>{description} </h4>
   </div>
</div>
   </>
  )
}

export default Itemsurplus;