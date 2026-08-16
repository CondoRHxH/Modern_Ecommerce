"use client"
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import React, { useState } from 'react'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'

import { useStateContext } from '../context/StateContext'

const Navbar = () =>{
    const {showCart, setShowCart, totalQuantities} = useStateContext()
    
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    

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