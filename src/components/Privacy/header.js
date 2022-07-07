
import Image from 'next/image'
import React from 'react'


export default function Header() {
    return (

        <div className="pt-8 pb-4 bg-white header">
          
                <div className="container mx-auto md:flex ">

                    <div className="text-center ">
                        {/* <Image src='/images/StellarStack.png' width={184} height={42} alt="" /> */}
                        <h1 className='text-[#0399DA] text-[30px] font-extrabold'>Stellar<span className='text-black font-bold'>Stack.</span></h1>
                    </div>

<<<<<<< HEAD
                    <div className=' md:w-[70%] py-3 text-center md:block hidden pl-36'>
=======
                    <div className=' md:w-[70%] text-center md:block py-3 hidden pl-36'>
>>>>>>> d9dce60dfe324418b193e2f078e3e3394c1f7a19
                      <a href="index">  <span className='px-3  hover:text-[#0399DA] '>Home</span></a>
                        <span className='px-3  hover:text-[#0399DA] cursor-pointer'>Services</span>
                        <a href="Aboutus">  <span className='px-3 hover:text-[#0399DA] '>About us</span></a>
                      <a href='Contactus'><span className='px-3 hover:text-[#0399DA]'>Contact us</span></a>
                    </div>

                    {/* <div className='lg:w-[20%] pt-12 md:pt-0 md:flex  md:block hidden '>
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-[250px]">
                                <div className="flex absolute inset-y-0 left-[210px] items-center pl-3 pointer-events-none">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 23L17.8057 17.7964M20.6842 10.8421C20.6842 13.4524 19.6473 15.9558 17.8015 17.8015C15.9558 19.6473 13.4524 20.6842 10.8421 20.6842C8.23182 20.6842 5.72844 19.6473 3.88269 17.8015C2.03693 15.9558 1 13.4524 1 10.8421C1 8.23182 2.03693 5.72844 3.88269 3.88269C5.72844 2.03693 8.23182 1 10.8421 1C13.4524 1 15.9558 2.03693 17.8015 3.88269C19.6473 5.72844 20.6842 8.23182 20.6842 10.8421Z" stroke="#0399DA" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 rounded-xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </form>
                    </div>*/}
                </div>
                </div>



    )
}
