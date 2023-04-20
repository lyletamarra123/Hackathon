import React from 'react'
import { useNavigate } from 'react-router-dom';

const Edition = () => {

  const navigate = useNavigate();

  return (
    <>
    <div> <button onClick = {() => navigate('/edition/shareEats')} >shareEats</button></div>
    <div><button>shareEatsFarmers</button></div>
    <div><button>Enterprices</button></div>
    </>
  )
}

export default Edition;