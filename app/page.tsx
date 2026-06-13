import React from 'react'
import { HeroBanner } from '../components/index';


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

export default index;