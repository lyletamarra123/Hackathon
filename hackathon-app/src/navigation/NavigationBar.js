
import { NavLink, useNavigate } from 'react-router-dom';
import '../CSS/NavigationBar.css';
import myLogo from '../assets/all-images/logo.png';
const NavigationBar = () => {

    const navLinkstyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'normal',
        }

    }
    const navigate = useNavigate();

    return (

        <nav className="navbar">
            <img src={myLogo} alt="ShareEats" className="logo" onClick = {() => navigate('/')}/>
            <div className='left'>
                <NavLink className="navlink" to="/edition">
                    Edition
                </NavLink>
                <NavLink className="navlink" to="/documentation">
                    Documentation
                </NavLink>
                <NavLink className="navlink" to="/costumerStories">
                    Customer Stories
                </NavLink>
                <NavLink className="navlink" to="/support">
                    Support
                </NavLink>
            </div>
            <div className='right'>
                <NavLink className="navlink" to="/Login">
                    Login
                </NavLink>
            </div>
        </nav>
    );
}

export default NavigationBar;