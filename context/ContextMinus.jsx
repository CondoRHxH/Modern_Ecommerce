"use client"

import { useContext } from "react";

import { useStateContext } from "./StateContext";

import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'

export default function ContextMinus( {products} ){
    const {qty, decQty, incQty} = useStateContext()

    return(
        <>
        {/* <button onClick={decQty}>--------</button>
            {qty}
        <button onClick={incQty}>+++++</button> */}
        <div className='quantity'>
                    <h3>Quantity :</h3>
                    <p className='quantity-desc'>
                        <span className='minus'>
                            <AiOutlineMinus onClick={decQty}/>
                        </span>
                        <span className='num'>
            {qty}
                            
                        </span>
                        <span className='plus'>
                            <AiOutlinePlus onClick={incQty}/>
                        </span>
                        
                    </p>
                    {console.log("Zfkaf,ao,fafoakfoa,fa",products)}
                </div>
        </>
    )
}