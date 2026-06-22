"use client"
import { useState } from "react";
import { urlFor } from "../lib/client";

export default function QuantityFunction( { OPO : image}){
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className='image-container'>
                <img src={urlFor(image[index])} className='product-detail-image' />
                    {console.log(image)}
            </div>
            <div className='small-images-container'>
                {image?.map((item, i) =>(
                <img src={urlFor(item)} key={i} 
                    className={i === index ? 'small-image selected-image' : 'small-image'} 
                    onMouseEnter={() => setIndex(i)}
                />
                ))}
            </div>
        </div>
    );

}