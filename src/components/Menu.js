import React from 'react'
import imgCheeseburger from "../assets/img/1696260696.webp"
import imgCheeseburgerTwo from "../assets/img/1696260770.webp"
import hamburguer from "../assets/img/hamburguer.webp"
import hamburguer2 from "../assets/img/hamburger2.webp"
import veggie from "../assets/img/veggie.webp"
import { useMediaQuery } from 'react-responsive';
const Menu = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
    return (
        <div className='section'>
            {isMobile ? (
                <div className='section-menu_xs'>
                    <span className='section-subtitle'>¿Quer&iacute;as ver...?</span>
                    <h1 className='section-title'>NUESTRAS BURGERS</h1>
                    <div className='container_xs flex'>
                        <div className='menu-item_container'>
                            <div className='menu-item'>
                                <img src={imgCheeseburger} />
                                <div className='menu-item_text'>
                                    <p className='menu-item_description'>La fórmula es secreta, pero podemos revelar algunos de sus ingredientes para que armes tu hamburguesa perfecta.</p>
                                    <p className='menu-item_price'>$380.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='menu-item_container'>
                            <div className='menu-item'>
                                <img src={imgCheeseburgerTwo} />
                                <div className='menu-item_text'>
                                    <p className='menu-item_description'>Está burger viene con dos requisitos: mucha burger y mucho cheese. El resto lo decidís vos.</p>
                                    <p className='menu-item_price'>$510.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='menu-item_container'>
                            <div className='menu-item'>
                                <img src={veggie} />
                                <div className='menu-item_text'>
                                    <p className='menu-item_description'>Bienvenido, querido ruder, al delicioso mundo de la veggie. Acá abajo vas a poder elegir con qué toppings la querés.</p>
                                    <p className='menu-item_price'>$400.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='menu-item_container'>
                            <div className='menu-item'>
                                <img src={hamburguer} />
                                <div className='menu-item_text'>
                                    <p className='menu-item_description'>A veces, menos es más. Nosotros ponemos pan, carne, pan. Y a vos te toca elegir el resto.</p>
                                    <p className='menu-item_price'>$370.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='menu-item_container'>
                            <div className='menu-item'>
                                <img src={hamburguer2} />
                                <div className='menu-item_text'>
                                    <p className='menu-item_description'>De lo bueno: dos platos. Pan, carne, carne, pan. Y a vos te toca elegir el resto.</p>
                                    <p className='menu-item_price'>$500.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section-full_width_xs'>
                        <p><span>R&Uacute;STICAS O NORMALES</span><span>CON O SIN CHEDDAR</span></p>
                        <h1>PODES ACOMPA&Ntilde;AR TODO CON PAPAS</h1>
                    </div>
                </div>) :
                (
                    <div className='section-menu'>
                        <span className='section-subtitle'>¿Quer&iacute;as ver...?</span>
                        <h1 className='section-title'>NUESTRAS BURGERS</h1>
                        <div className='container flex'>
                            <div className='menu-item_container flex-end'>
                                <div className='menu-item'>
                                    <img src={imgCheeseburger} />
                                    <div className='menu-item_text'>
                                        <p className='menu-item_description'>La fórmula es secreta, pero podemos revelar algunos de sus ingredientes para que armes tu hamburguesa perfecta.</p>
                                        <p className='menu-item_price'>$380.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-item_container flex-center'>
                                <div className='menu-item'>
                                    <img src={imgCheeseburgerTwo} />
                                    <div className='menu-item_text'>
                                        <p className='menu-item_description'>Está burger viene con dos requisitos: mucha burger y mucho cheese. El resto lo decidís vos.</p>
                                        <p className='menu-item_price'>$510.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-item_container flex-start'>
                                <div className='menu-item'>
                                    <img src={veggie} />
                                    <div className='menu-item_text'>
                                        <p className='menu-item_description'>Bienvenido, querido ruder, al delicioso mundo de la veggie. Acá abajo vas a poder elegir con qué toppings la querés.</p>
                                        <p className='menu-item_price'>$400.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-item_container flex-end'>
                                <div className='menu-item'>
                                    <img src={hamburguer} />
                                    <div className='menu-item_text'>
                                        <p className='menu-item_description'>A veces, menos es más. Nosotros ponemos pan, carne, pan. Y a vos te toca elegir el resto.</p>
                                        <p className='menu-item_price'>$370.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-item_container flex-start'>
                                <div className='menu-item'>
                                    <img src={hamburguer2} />
                                    <div className='menu-item_text'>
                                        <p className='menu-item_description'>De lo bueno: dos platos. Pan, carne, carne, pan. Y a vos te toca elegir el resto.</p>
                                        <p className='menu-item_price'>$500.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='section-full_width'>
                            <p><span>R&Uacute;STICAS O NORMALES</span><span>CON O SIN CHEDDAR</span></p>
                            <h1>PODES ACOMPA&Ntilde;AR TODO CON PAPAS</h1>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Menu