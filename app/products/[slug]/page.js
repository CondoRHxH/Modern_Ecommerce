'use client'
import { useState } from 'react'
import { client } from '../../../lib/client'
import { urlFor } from '../../../lib/client';
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'

import  Product  from '../../../components/Product'

// import { Product } from '../../../components/Product'

export default async function ProductDetails( {params } ){

    const { slug } = await params;

    const [index, setIndex] = useState(0)

    const products  = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`,slug)    
    // const products = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`)
    const allProducts = await client.fetch(`*[_type == "product"]`)

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
                        <img src={urlFor(image[0])} className='product-detail-image' />
                        {console.log(products)}
                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) =>(
                            <img src={urlFor(item)} key={i} 
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar/>
                    </div>
                    <p>20</p>
                </div>
                <h4>Details : </h4>
                    <p>{details}</p>
                    <p className='price'>$ {price}</p>
                    <div className='quantity'>
                    <h3>Quantity :</h3>
                    <p className='quantity-desc'>
                        <span className='minus'>
                            <AiOutlineMinus/>
                        </span>
                        <span className='num'>
                            0
                        </span>
                        <span className='plus'>
                            <AiOutlinePlus/>
                        </span>
                        
                    </p>
                    {console.log("Zfkaf,ao,fafoakfoa,fa",products)}
                </div>
                <div className='buttons'>
                        <button className='add-to-cart'>Add To Cart</button>
                        <button className='buy-now'>Buy Now</button>
                    </div>
                </div> 
            </div>
            <div className='maylike-products-wrapper'>
                <h2>May Also Like : </h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        
                        {allProducts.map((item) =>(
                           <Product key={item._id} product={item}/> 
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