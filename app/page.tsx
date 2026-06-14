import React from 'react'
import { HeroBanner } from '../components/index';
import { client } from '../lib/client'


const index = () => {
  
  return(
    <>
      <HeroBanner/>
    
    <div className='products-heading'>
      <h3>Best Selling Products</h3>
      <p>One of the best speakers</p>
    </div>
    
    <div className='products-container'>
      {['product1','product2'].map((product) => product +'  ')}
    </div>
    
    </>
  )
}

export const FetchDataFromSanity = async() => {
  const query = '*[type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[type == "banner"]'
  const banner = await client.fetch(bannerQuery);
}

export default index;