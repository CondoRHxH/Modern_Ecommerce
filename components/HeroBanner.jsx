import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

const HeroBanner = ( {heroBanner}) => {
    return(
        <>
            <div className='hero-banner-container'>
                <div>
                    <p className='beats-solo'>{heroBanner.smallText}</p>
                    <h3>{heroBanner.midText}</h3>
                    <h1>{heroBanner.largeText1}</h1>
                    {/* <h3>{heroBanner.product}</h3> */}
                    <img src={urlFor(heroBanner.image)} alt="product" className="hero-banner-image" />
                    <div>

                    <Link href={`/products/apex-pro-wireless-rgb-mechanical-keyboard`}>
                        <button>{heroBanner.buttonText}</button>
                    </Link>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>{heroBanner.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner