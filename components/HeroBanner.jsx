import React from 'react'
import Link from 'next/link'

const HeroBanner = ( {heroBanner}) => {
    return(
        <>
            <div className='hero-banner-container'>
                {console.log(heroBanner)}
                <div>
                    <p className='beats-solo'>{heroBanner.desc}</p>
                    <h3>{heroBanner.product}</h3>
                    <img src="#" alt="ProductImg" className='hero-banner-image'/>
                </div>
                <div>
                    <Link href='#'><button>HELLLLo</button></Link>
                </div>
                <div className='desc'>
                    <h3>DAddd</h3>
                    <p>DEsc</p>
                </div>
            </div>
        </>
    )
}

export default HeroBanner