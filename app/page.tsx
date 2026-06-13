import React from 'react'

const index = () => {
  
  return(
    <>
    hero footer
    <div>
      <h3>Best Selling Products</h3>
      <p>One of the best speakers</p>
    </div>
    
    <div>
      {['product1','product2'].map((product) => product +'  ')}
    </div>
    
      Fotter Section
    </>
  )
}

export default index;