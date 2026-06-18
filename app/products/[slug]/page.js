import React from 'react'
import { client } from '../../../lib/client'

export default async function ProductDetails( { slug } ){

    const products = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`)

    return (
        <div>
            <div>
                <div>
                    <div>
                        fzepogkpozjgopzjgjezrjgerjglkerglke
                    </div>
                </div>
            </div>
        </div>
    )
}

// export const getStaticProps = async ( {params: {slug}} ) => {
// //   const query = `*[_type == "product" && slug.current == '${slug}'][0]`
// //   const products = await client.fetch(query);

// //   const bannerQuery = '*[_type == "banner"]'
// //   const bannerData = await client.fetch(bannerQuery);


// //   return{
// //     props : {products, bannerData}
// //   }

//   const products = await client.fetch(`*[_type == "products" && slug.current == '${slug}'][0]`);
//   const bannerData = await client.fetch(`*[_type == "banner"]`);
//   console.log(slug)
// }

// export default ProductDetails;