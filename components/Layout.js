import React from 'react'
import Sidebar from './Sidebar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Ads1 from './Ads1'


const Layout = ({ children }) => {

    return (
        <>

            <Navbar />
            <Ads1 />
            <main className='flex flex-row'>
                <section className='w-5/6 block'>{children}</section>
                <Sidebar />
            </main>
            <Footer />



        </>
    )
}

export default Layout