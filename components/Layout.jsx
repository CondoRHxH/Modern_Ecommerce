import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'

const Layout = () => {
    return (
        <div>
            <Head>
                <title>Ecommerce Shop</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main>

            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout