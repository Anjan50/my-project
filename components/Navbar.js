import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font bg-white shadow-lg">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mx-16">
                    <Image src="/logo.svg" alt='' width={300} height={30} />
                </a></Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/pricing'}><div className='bg-blue-600 p-3'><a className=" hover:text-gray-900 text-white"><b>Pricing</b></a></div></Link>
                    <Link href={'/plagiarism_checker'}><a className="mx-5 mr-5 hover:text-gray-900"><b>Plagiarism Checker</b></a></Link>
                    <Link href={'/grammer_check'}><a className="mr-5 hover:text-gray-900"><b>Grammar Check</b></a></Link>
                    <Link href={'/reverse_img'}><a className="mr-5 hover:text-gray-900"><b>Reverse Image Search</b></a></Link>
                </nav>

                <Link href={'./login'}>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </header >
    )
}

export default Navbar