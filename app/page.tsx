import React from 'react'
import { HeroBanner } from '../components/index';
import { client } from '../lib/client'


const index = ({ products, banner }: { products: any; banner: any }) => {
  
  return(
    <>
      <HeroBanner/>
    
    <div className='products-heading'>
      <h3>Best Selling Products</h3>
      <p>One of the best speakers</p>
    </div>
    
    <div className='products-container'>
      {products?.map((product: any) => <div key={product._id}>{product.name}</div>)}
    </div>
    
    </>
  )
}

export const FetchDataFromSanity = async() => {
  const query = `*[_type == "products"]`
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery);

  return{
    props : {products, banner}
  }
}

export default index;