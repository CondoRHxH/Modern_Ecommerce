"use client"

import { useContext } from "react";

import { useStateContext } from "./StateContext";




export default function ContextMinus( {products} ){
    const {qty, decQty, incQty} = useStateContext()

    return(
        <>
        <button onClick={decQty}>--------</button>
            {qty}
        <button onClick={incQty}>+++++</button>
        </>
    )
}