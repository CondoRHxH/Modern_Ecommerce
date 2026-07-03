"use client"

import React, { useState } from 'react'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'

import { useStateContext } from '../context/StateContext'

const Navbar = () =>{
    const {showCart, setShowCart, totalQuantities} = useStateContext()
    
    const data = useStateContext()
    console.log(data)
    return(
        <div className='navbar-container'>
            <p><Link href='/'>Store</Link></p>
                
            <p>
                <button onClick={() => setShowCart(true)} className='cart-icon'>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>{totalQuantities}</span>
                </button>
            </p>

        {showCart && <Cart />}
        </div>
    )
}

export default Navbar