"use client"
import React, {useRef} from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';

import { TiDeleteOutline } from 'react-icons/ti'
import { Toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { urlFor } from '@/lib/client';

import { useStateContext } from '@/context/StateContext';

const Cart = () => {
    const cartRef = useRef();

    const {totalPrice, totalQuantities, cartItems, setShowCart, decQty, incQty,qty} = useStateContext()
    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className='cart-container'>
                <button className='cart-heading' onClick={() => setShowCart(false)}> 
                    <AiOutlineLeft/>
                    <span className='heading'>Your Cart</span>
                    <span className='cart-num-items'> ({totalQuantities} Item) </span>
                </button>

                
                {cartItems.length < 1 && (
                    <div className='empty-cart'>
                        <AiOutlineShopping size={150}/>
                        <h3>Your Cart Empty</h3>
                        <button className='btn'>
                            <Link href='/' onClick={() =>setShowCart(false)}>Go Shopping</Link>  
                        </button>
                    </div> 
                )}
                <div className='product-container'>
                {cartItems.length >= 1 && cartItems.map((item) => (
                    <div className='product' key={item._id}>
                        <img src={urlFor(item?.image[0])} className='cart-product-image'/>
                        <div className='item-desc'>
                            <div className='flex top'>
                                <h2>{item.name}</h2>
                                <h3>Price : {item.price}$</h3>
                            </div>
                            <div className='flex bottom'>
                                <div>
                                    <p className='quantity-desc'>
                                        <span className='minus'>
                                            <AiOutlineMinus/>
                                        </span>
                                        <span className='num'>
                                            0
                                        </span>
                                        <span className='plus'>
                                            <AiOutlinePlus/>
                                        </span>
                                    </p>
                                </div>
                                <button className='remove-item'>
                                    <TiDeleteOutline/>
                                </button>
                            </div>
                        </div>
                        {cartItems.length >= 1 && (
                            <div className='cart-bottom'>
                                <div className='total'>
                                    <h3>Subtotal :</h3>
                                    <h3>{totalPrice} $</h3>
                                </div>
                                <div className='btn-container'>
                                    <button className='btn'>
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )) }
            </div>
            </div>
            
        </div>
    )
}

export default Cart;