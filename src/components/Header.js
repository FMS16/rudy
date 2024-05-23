import React from 'react'
import logo from "../assets/img/logo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const isMobile = useMediaQuery({minWidth: 320, maxWidth:480});
    const [ showMenu, setShowMenu ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        const nav = document.getElementById('nav_xs');

        if (nav.classList.contains('show-menu')) {
            nav.classList.remove('show-menu');
        } else {
            nav.classList.add('show-menu');
        }
    };

    const closeMenu = () => {
        setShowMenu(false);
        const nav = document.getElementById('nav_xs');
        nav.classList.remove('show-menu');
    };

    return (
        <header className='header'>
            {isMobile ? (

                <div className='header-xs'>
                    {showMenu && <div className='overlay' onClick={closeMenu}></div>}
                    <img src={logo} alt='logo' />
                    <FontAwesomeIcon onClick={toggleMenu} icon={faBars}></FontAwesomeIcon>
                    <nav className='nav-menu_xs' id='nav_xs'>
                        <h1><img src={logo} alt='logo' className='logo-white' /></h1>
                        <ul>
                            <li><a href=''>men&uacute;</a></li>
                            <li><a href=''>regalos</a></li>
                            <li><a href=''>nosotros</a></li>
                            <li><a href=''>locales</a></li>
                            <li><a href=''>faqs</a></li>
                            <li><a href=''>equipo</a></li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <nav className='nav-menu_lg'>
                    <a href=''>men&uacute;</a>
                    <a href=''>regalos</a>
                    <a href=''>nosotros</a>
                    <img src={logo} alt='logo' />
                    <a href=''>locales</a>
                    <a href=''>faqs</a>
                    <a href=''>equipo</a>
                </nav>
            )}
        </header>
    );
}

export default Header;
