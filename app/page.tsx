import React from 'react'
import { FooterBanner, HeroBanner } from '../components/index';
import { client } from '../lib/client'
import { Product } from '../components/index';


// const index = ({ products, bannerData }: { products: any; bannerData: any }) => (

  
  
//     <div>
//       <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
//     <div className='products-heading'>
//       <h3>Best Selling Products</h3>
//       <p>One of the best speakers</p>
//     </div>
    
//     <div className='products-container'>
//       {products?.map((product : any) =>product.name)}
//     </div>
    
//     </div>
// )

// export const FetchDataFromSanity = async () => {
//   const query = `*[_type == "products"]`
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]'
//   const bannerData = await client.fetch(bannerQuery);


//   return{
//     props : {products, bannerData}
//   }
// }



// export default index;
export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]`);
  const bannerData = await client.fetch(`*[_type == "banner"]`);

  return (
    <div>
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
      
      <div className='products-heading'>
        <h3>Best Selling Products</h3>
        <p>One of the best speakers</p>
      </div>

      <div className='products-container'>
        {products?.map((product: any) => <Product key={product._id} Product={product} /> ) }
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
      
    </div>

  );
}