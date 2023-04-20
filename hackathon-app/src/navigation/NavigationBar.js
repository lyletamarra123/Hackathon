
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {
 
    const navLinkstyles = ({isActive}) => {
        return {
            fontWeight:isActive ?  'bold': 'normal',
            textDecoration : isActive ? 'none': 'normal',
        }

    }

  return(
   <div>
    <NavLink style = { navLinkstyles } to ='/'>(ShareEat Logo) </NavLink>
    <NavLink   style = { navLinkstyles } to ='/edition'>Edition </NavLink>
    <NavLink  style = { navLinkstyles } to ='/documentation'>Documentation </NavLink>
    <NavLink style = { navLinkstyles } to ='/costumerStories'>Customer Stories </NavLink>
    <NavLink style = { navLinkstyles } to ='/support'>Support </NavLink>
    <NavLink style = { navLinkstyles } to ='/Login'>Login </NavLink>
    {/* onClick = {()=>setShow(false)} */}
   </div>
  

  );
}

export default NavigationBar;