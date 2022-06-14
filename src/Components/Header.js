// import hypeLogo from "../Assets/hypeLogo.png";
import {Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header-wrapper">
        <div className="inner-header">
        <div className="navbar">
            <div>
            <Link to="/"><p className='logo'>LOGO</p ></Link></div>
            <div>
            <Link to="/profile"><button className="button" value='Profile'> Profile</button></Link>
            
            </div>
            
            
        </div>
        
        <h1 className='heading'>YOUR MOVIES</h1>
        </div>
        </div>
    );
}

export default Header;