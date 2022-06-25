
import Image from 'next/image'
import React from 'react'


export default function Header() {
    return (

        <div className="bg-[#0d0d0d] pt-8 pb-4 header overflow-x-hidden overflow-y-hidden" >
            <div className="md:flex container mx-auto ">

                <div className="text-center sm:w-[15%]">
                    <Image src='/images/LOGO TEXT.png' width={152} height={22} alt="" />
                </div>

                <div className=' sm:w-[85%] md:block hidden text-center ml-8 cursor-pointer'>
                    <span className='text-white px-3'>Home</span>
                    <span className='text-white px-3'>Services</span>
                    <span className='text-white px-3'>About us</span>
                    <span className='text-white px-3'>Contact us</span>
                </div>

                <div className='md:w-[25%]lg:pr-0 md:pr-8 pt-12 md:pt-0 md:flex  md:block hidden '>
                    <form className="flex  justify-center  items-center">
                        <div className="relative w-72">
                            <div className="flex absolute bottom-2 inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            </div>
                            <input type="text" className="bg-white border h-7 border-none  hover:ring-offset-2  hover:border-2   text-sm rounded-xl block w-full px-9 pl-3 p-2.5" placeholder="" required />
                            <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 23L17.8057 17.7964M20.6842 10.8421C20.6842 13.4524 19.6473 15.9558 17.8015 17.8015C15.9558 19.6473 13.4524 20.6842 10.8421 20.6842C8.23182 20.6842 5.72844 19.6473 3.88269 17.8015C2.03693 15.9558 1 13.4524 1 10.8421C1 8.23182 2.03693 5.72844 3.88269 3.88269C5.72844 2.03693 8.23182 1 10.8421 1C13.4524 1 15.9558 2.03693 17.8015 3.88269C19.6473 5.72844 20.6842 8.23182 20.6842 10.8421Z" stroke="#0399DA" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}
