import React from 'react'
import logo from '../assets/images/A.png'
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className='footerContent'>
                <div className='footerBrand'>
                    <img src={logo} alt='Logo of Angelic' />
                </div>
                <div className='footerLinks'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/catalog">Catalog</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className='footerContact'>
                    <div className='footerIcons'>
                        <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2025 Angelic Garden. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer