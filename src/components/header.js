import myimg1 from '../../public/images/LOGO TEXT.png'
import Image from 'next/image'
import React from 'react'


export default function Header() {
    return (

        <div className="bg-[#0d0d0d] pt-8 pb-4">
            <div className="container mx-auto  sm:flex">

                <div className="text-center sm:w-[50%]">
                    <Image src='/images/LOGO TEXT.png' width={152} height={22} alt="" />
                </div>

                <div className=' sm:w-[60%]'>
                    <span className='text-white px-3'>Home</span>
                    <span className='text-white px-3'>Services</span>
                    <span className='text-white px-3'>About us</span>
                    <span className='text-white px-3'>Contact us</span>
                </div>

                {/* <div className='w-[20%] flex'>
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-[250px]">
                            <div className="flex absolute inset-y-0 left-[210px] items-center pl-3 pointer-events-none">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 23L17.8057 17.7964M20.6842 10.8421C20.6842 13.4524 19.6473 15.9558 17.8015 17.8015C15.9558 19.6473 13.4524 20.6842 10.8421 20.6842C8.23182 20.6842 5.72844 19.6473 3.88269 17.8015C2.03693 15.9558 1 13.4524 1 10.8421C1 8.23182 2.03693 5.72844 3.88269 3.88269C5.72844 2.03693 8.23182 1 10.8421 1C13.4524 1 15.9558 2.03693 17.8015 3.88269C19.6473 5.72844 20.6842 8.23182 20.6842 10.8421Z" stroke="#0399DA" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl p-1 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </form>
                </div> */}
            </div>
        </div>


    )
}
