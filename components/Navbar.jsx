import React from 'react'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () =>{
    return(
        <div className='navbar-container'>
            <p><Link href='/'>Store</Link></p>
                
            <p>
                <button>
                    <AiOutlineShopping />
                    <span className='cart-item-qty'>1</span>
                </button>
            </p>
        </div>
    )
}

export default Navbar