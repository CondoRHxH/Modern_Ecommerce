import React from 'react'

import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return(
        <div className='footer-container'>
            <p>&copy; 2026 All Rights Reserved.</p>
            <p className='icons'>
                <a href="https://Instagram.com"><AiFillInstagram/></a>
                <a href="https://X.com"><AiOutlineTwitter/></a>
                <a href="https://Facebook.com"><AiFillFacebook/></a>
            </p>
        </div>
    )
}

export default Footer;