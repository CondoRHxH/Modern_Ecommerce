import React from 'react'

import Link from 'next/link'


import { urlFor } from '../lib/client'

const Product = ( {Product : {image, price, name, slug}}) => {
    return(
        <div>HADO PAPRIARkf
            <Link href={`products/${slug.current}`}>
            
            <div>
                <img src={urlFor(image && image[0])} alt="Product_Image"
                width={255}
                height={255}
                className='product-image'
                />
            </div>

            </Link>
        </div>

    )
}

export default Product