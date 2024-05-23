import React from 'react'
import img2 from "../assets/img/330424419_5627905453998202_6001635303367223035_n.jpg";
import { useMediaQuery } from 'react-responsive';

const Banner = () => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
    return (
        <div className='banner'>
            {isMobile ? (
                <div className='banner-content_xs'>
                    <h1 className='overlay-banner'><img src={img2} /></h1>
                    <div className='banner-text_xs'>
                        <span className='banner-subtitle'>lo nuestro es</span>
                        <h1 className='banner-title'>EL MEJOR MEN&Uacute;</h1>
                    </div>
                </div>
            ) : (
                <div className='banner-content'>
                    <h1 className='overlay-banner'><img src={img2} /></h1>
                    <div className='banner-text'>
                        <span className='banner-subtitle'>lo nuestro es</span>
                        <h1 className='banner-title'>EL MEJOR MEN&Uacute;</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Banner