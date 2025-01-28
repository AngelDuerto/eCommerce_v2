import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import logoA from '../assets/images/Angel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';


function NavBar(){
    return (
        <nav className='navBar'>
            <div id="logoContainer">
                <img id='logoA' src={logoA} alt="Angelic logo" />
            </div>
            <div className='navLinks'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/catalog'>Catalog</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navIcons">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </nav>
    );
};

export default NavBar;