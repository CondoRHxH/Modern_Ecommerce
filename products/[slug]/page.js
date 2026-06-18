import React from 'react'

const ProductDetails = () => {
    return (
        <div>
            <div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async ( {params: {slug}} ) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]'
//   const bannerData = await client.fetch(bannerQuery);


//   return{
//     props : {products, bannerData}
//   }

  const products = await client.fetch(`*[_type == "product" && slug.current == '${slug}'][0]`);
  const bannerData = await client.fetch(`*[_type == "banner"]`);
  console.log(slug)
}

export default ProductDetails;