import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'
// import Link from 'next/link'

const Layout = ( {children} ) => {
    return (
        <div className='layout'>
            <Head>
                <title>Ecommerce Shop</title>
            </Head>
            <header>
                <Navbar anchorElNav={null}/>
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout