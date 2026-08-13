import React from 'react';

import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ( {footerBanner : {image, discount, largeText1, largeText2, saleTime, smallText,
    midText, desc, product, buttonText }}) => {
    return(
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <p>{discount}</p>
                    <p>{largeText1}</p>
                    <p>{largeText2}</p>
                    <p>{saleTime}</p>
                </div>
                <div className='right'>
                    <p>{smallText}</p>
                    <p>{midText}</p>
                    <p>{desc}</p>
                    <Link href={`/products/${product}`}>
                        <button className=''>{buttonText}</button>
                    </Link>
                </div>
                    <img src={urlFor(image)} alt="Product-Image" className='footer-banner-image' height={200} />
            </div>
        </div>
    )
}
        {console.log(FooterBanner)}


export default FooterBanner