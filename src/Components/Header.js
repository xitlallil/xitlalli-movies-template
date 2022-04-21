// import hypeLogo from "../Assets/hypeLogo.png";
import {Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header-wrapper">
        <div className="inner-header">
        <div className="navbar">
            <p className="logo">LOGO</p>
            <button className="button"> 
            <Link to="/profile">Profile</Link>
            </button>
        </div>
        
        <h1 className='heading'>YOUR MOVIES</h1>
        </div>
        </div>
    );
}

export default Header;