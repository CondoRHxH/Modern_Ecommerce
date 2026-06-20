import React from 'react'
import { client } from '../../../lib/client'
import { urlFor } from '../../../lib/client';

// import { Product } from '../../../components/Product'

export default async function ProductDetails( {params } ){

    const { slug } = await params;

    const products  = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`,slug)    
    // const products = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`)
    // const productsQuery = await client.fetch(`*[_type == "product"]`)

    // return{
    //     props : {products,productsQuery }
    // }

    // const productsQueryEx = await fetch.client(productsQuery)

    const {image, name, details, price} = products || {};

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image[0])} />
                        {console.log(products)}
                    </div>
                    <div className='small-images-container'>
                        {image.map((item, i) =>(
                            <img />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async() => {
    const query = `*[_type == "product"]{
        slug {
            current
        }
    }
    `
    const products = await client.fetch(query)

    const paths = products.map((product) => ({
        params : {
            slug : product.slug.current
        }
    }))
    return {
        paths,
        fallback :'blocking'
    }
}

export const WIW = async ( {params: {slug}} ) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`

   const productsQuery = '*[_type == "product"]'
    const products = await client.fetch(query);

   const productsQueryEx = await client.fetch(productsQuery);


   return{
     props : {products, productsQueryEx}
   }
}
//   const products = await client.fetch(`*[_type == "products" && slug.current == '${slug}'][0]`);
//   const bannerData = await client.fetch(`*[_type == "banner"]`);
//   console.log(slug)
// }

// export default ProductDetails;