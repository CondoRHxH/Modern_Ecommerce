"use client"

import { useContext } from "react";

import { useStateContext } from "./StateContext";

export default function AddingToCart( {product} ){

    const {qty, decQty, incQty, onAdd} = useStateContext()
    // {console.log("ADDDINGTOCART",product)}


    return(
        <>
        <button className='add-to-cart' onClick={() => onAdd(product, qty)}>Add To Cart</button>
        {/* <button className='buy-now'>Buy Now</button> */}
        </>
        
    )

}