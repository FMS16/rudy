import React from 'react'
import logo from "../assets/img/logoFooter.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
    return (
        <footer className='footer'>
            {isMobile ? (
                <div className='container-footer_xs flex'>
                    <ul className='footer-ul'>
                        <li>
                            <img className='logo-white' src={logo} />
                        </li>
                        <li>
                            <h1>Rudy Pocitos</h1>
                            <h2>26 De Marzo 3471 / Tel. 092 331 372</h2>
                        </li>
                        <li>
                            <h1>Rudy Punta Carretas</h1>
                            <h2>Guipúzcoa 332 / Tel. 092 258 035</h2>
                        </li>
                        <li>
                            <h1>Rudy Carrasco</h1>
                            <h2>Divina Comedia 1740 / Tel. 091 335 870</h2>
                        </li>
                        <li>
                            <h1>Rudy Centro</h1>
                            <h2>Ejido 1301 / Tel. 092 476 377</h2>
                        </li>
                        <li className='social-media'>
                            <a href=''>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </a>
                            <a href=''>
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                    <div className='footer-copyright'>
                        <p>© Copyright Rudy, 2023. Todos los derechos reservados.</p>
                    </div>
                </div>) :
                (
                    <div className='container-footer flex'>
                        <ul className='footer-ul'>
                            <li>
                                <img className='logo-white' src={logo} />
                            </li>
                            <li>
                                <h1>Rudy Pocitos</h1>
                                <h2>26 De Marzo 3471 / Tel. 092 331 372</h2>
                            </li>
                            <li>
                                <h1>Rudy Punta Carretas</h1>
                                <h2>Guipúzcoa 332 / Tel. 092 258 035</h2>
                            </li>
                            <li>
                                <h1>Rudy Carrasco</h1>
                                <h2>Divina Comedia 1740 / Tel. 091 335 870</h2>
                            </li>
                            <li>
                                <h1>Rudy Centro</h1>
                                <h2>Ejido 1301 / Tel. 092 476 377</h2>
                            </li>
                            <li className='social-media'>
                                <a href=''>
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </a>
                                <a href=''>
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                        <div className='footer-copyright'>
                            <p>© Copyright Rudy, 2023. Todos los derechos reservados.</p>
                        </div>
                    </div>
                )}

        </footer>
    )
}

export default Footer