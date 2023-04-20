
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {
 
    const navLinkstyles = ({isActive}) => {
        return {
            fontWeight:isActive ?  'bold': 'normal',
            textDecoration : isActive ? 'none': 'normal',
        }

    }

  return(
   <>
    <NavLink style = { navLinkstyles } to ='/'>(ShareEat Logo) </NavLink>
    <NavLink   style = { navLinkstyles } to ='/edition'>Edition </NavLink>
    <NavLink  style = { navLinkstyles } to ='/documentation'>Documentation </NavLink>
    <NavLink style = { navLinkstyles } to ='/costumerStories'>Customers </NavLink>
    <NavLink style = { navLinkstyles } to ='/Login'>Login </NavLink>
    {/* onClick = {()=>setShow(false)} */}
   </>
  

  );
}

export default NavigationBar;