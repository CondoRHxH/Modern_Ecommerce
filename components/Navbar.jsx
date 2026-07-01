import React, { useState } from 'react'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'

import { useStateContext } from '@/context/StateContext'

const Navbar = () =>{
    const {showCart, setShowCart, totalQuantities} = useStateContext()
    
    return(
        <div className='navbar-container'>
            <p><Link href='/'>Store</Link></p>
                
            <p>
                <button>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>1</span>
                </button>
            </p>

        <Cart />
        </div>
    )
}

export default Navbar