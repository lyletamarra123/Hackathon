import React from 'react'
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {

    const navLinkstyles = ({isActive}) => {
        return {
            fontWeight:isActive ?  'bold': 'normal',
            textDecoration : isActive ? 'none': 'normal',
        }
    }

  return (
   <>
    <div class ="home">
    <NavLink style = { navLinkstyles } to ='/'>Home </NavLink>
    </div>
    <div class ="surplus">
    <NavLink style = { navLinkstyles } to ='/surplus'>surplus </NavLink>
    </div>
    <div class ="buy">
    <NavLink style = { navLinkstyles } to ='/buy'>buy </NavLink>
    </div>
    <div class ="sell">
    <NavLink style = { navLinkstyles } to ='/sell'>sell </NavLink>
    </div>
   

   </>
  )
}

export default NavigationBar;