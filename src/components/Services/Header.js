/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import React from 'react'


export default function Header() {
    return (
        <>
            <div className="">
                <div className="pt-8 pb-4  ">

                    <div className="container mx-auto md:flex ">

                        <div className="text-center">
                            {/* <Image src='/images/StellarStack.png' width={184} height={42} alt="" /> */}
                            <h1 className='text-[#0399DA] text-[30px] font-extrabold'>Stellar<span className=' text-black font-light'>Stack.</span></h1>
                        </div>

                        <div className=' md:w-[65%] text-center md:block py-3 hidden pl-36'>
                            <a href="Home"><span className='px-3  hover:text-[#0399DA]'>Home</span></a>
                            <a href="Services"><span className='text-white hover:text-[#0399DA] px-3 cursor-pointer'>Services</span></a> 
                            <a href="Aboutus"><span className='px-3  hover:text-[#0399DA]'>About us</span></a>
                            <a href='Contactus'><span className='px-3 hover:text-[#0399DA]'>Contact us</span></a>
                        </div>

                    </div>
                </div>



            </div>


        </>

    )
}
