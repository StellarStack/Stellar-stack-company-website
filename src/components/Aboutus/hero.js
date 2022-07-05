  /* eslint-disable react/no-unescaped-entities */
  import Image from "next/image"

export default function Hero() {
    return (
        <>
      
            <div className="bg-white pt-8 pb-4 header Hero ">
                <div className="md:flex container mx-auto ">

                    <div className="text-center  ">
                        <Image src='/images/LOGO TEXT.png' width={184} height={42} alt="" />
                    </div>

                    <div className=' md:w-[90%] text-center md:block hidden pl-36'>
                        <a href="index"><span className='text-white hover:text-[#0399DA] px-3'>Home</span></a>
                        <span className='text-white hover:text-[#0399DA] px-3 cursor-pointer'>Services</span>
                        <a href="Aboutus"><span className='text-white hover:text-[#0399DA] px-3'>About us</span></a>
                        <a href="Contactus"><span className='text-white hover:text-[#0399DA] px-3'>Contact us</span></a>
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
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl p-1 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </form>
                    </div> */}
                </div> 



                <div className="container mx-auto flex gap-x-2 pt-12 md:pl-[7px] pl-6  ">
                    <div className=''>
                        <a href="Home"> <h1 className="text-white">Home</h1></a>
                    </div>
                    <div className="pt-[9px]">
                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L6 4.03L0 8V0Z" fill="white" />
                        </svg>
                    </div>
                    <div className='pt-1'>
                        <h1 className="text-[#0399DA] text-[14px]">ABOUT US</h1>
                    </div>
                </div>


                <div className="container mx-auto pt-8 sm:pt-36 pb-28">
                    <div className="px-5 md:ml-[83px]">
                        <h1 className="text-[60px] sm:text-[90px] text-white font-extrabold">Better Solutions<br></br> for a<span className="text-[#0399DA] font-extrabold pl-2 leading-5">Better World.</span></h1>
                    </div>

                    <div className="md:flex gap-x-16 pt-12 sm:pt-[200px] ">
                        <div className="ml-12 lg:ml-[180px] mt-3 ">
                            <h1 className="text-white">ABOUT<span className="text-[#0399DA] pl-1">Stellar</span>Stack </h1>
                        </div>
                        <div className=" md:flex gap-x-6">
                            <div className=" px-8 pl-4">
                                <Image src='/images/Line 18.png' width={279} height={1} alt="" />
                                <h1 className="text-white font-semibold text-[12px]">01</h1>
                                <h1 className="text-white font-semibold text-[12px]">Who We Are?</h1>
                            </div>
                            <div className="pl-4">
                                <Image src='/images/Line 18.png' width={279} height={1} alt="" />
                                <h1 className="text-white font-semibold text-[12px]">02</h1>
                                <h1 className="text-white font-semibold text-[12px]">Values  & Vision</h1>
                            </div>
                            <div className=" px-8 pl-4">
                                <Image src='/images/Line 18.png' width={279} height={1} alt="" />
                                <h1 className="text-white font-semibold text-[12px]">01</h1>
                                <h1 className="text-white font-semibold text-[12px]">Why Stellarstack?</h1>
                            </div>                    
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

        