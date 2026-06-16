import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

const HeroBanner = ( {heroBanner}) => {
    return(
        <>
            <div className='hero-banner-container'>
                {console.log(heroBanner)}
                <div>
                    <p className='beats-solo'>{heroBanner.desc}</p>
                    <h3>{heroBanner.product}</h3>
                    {/* <img src={urlFor(heroBanner.image)} alt="product" className="hero-banner-image" /> */}
                </div>
                <div>
                    <Link href='#'><button>HELLLLo</button></Link>
                </div>
                <div className='desc'>
                    <p>{heroBanner.desc}</p>
                    <p>{heroBanner.midText}</p>
                </div>
            </div>
        </>
    )
}

export default HeroBanner