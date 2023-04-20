import React from 'react'
import { NavLink } from 'react-router-dom';
const EditionNav = () => {

    const navLinkstyles = ({isActive}) => {
        return {
            fontWeight:isActive ?  'bold': 'normal',
            textDecoration : isActive ? 'none': 'normal',
        }

    }
  return (
    <div>
         <NavLink style = { navLinkstyles } to ='/ask'>Ask </NavLink>
         <NavLink style = { navLinkstyles } to ='/give'>give </NavLink>
         <NavLink style = { navLinkstyles } to ='/locate'>locate </NavLink>
    </div>
  )
}

export default EditionNav;