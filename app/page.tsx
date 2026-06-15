import React from 'react'
import { HeroBanner } from '../components/index';
import { client } from '../lib/client'



const index = ({ products, bannerData }: { products: any; bannerData: any }) => (
  
    <div>
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
    <div className='products-heading'>
      <h3>Best Selling Products</h3>
      <p>One of the best speakers</p>
    </div>
    
    <div className='products-container'>
      {products?.map((product : any) =>product.name)}
    </div>
    
    </div>
)

export const FetchDataFromSanity = async () => {
  const query = `*[_type == "products"]`
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);


  return{
    props : {products, bannerData}
  }
}



export default index;