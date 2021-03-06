import Image from 'next/image'

export default function Section2() {
    return (
        <>

            <div className="container mx-auto max-w-[1400px] ">
                <div className="container mx-auto pt-10 lg:flex lg:px-0 md:px-12 sm:px-12 px-12">
                    <div className=" md:w-[50%]">
                        <p className="text-[20px] font-medium">Check out our full line of our services, that we<br></br> provide in the domain of Information<br></br> Technology globally.
                        </p>
                        <div className='pt-8'>
                          <a href='Contactus'>
                            <button className='bg-[#0399DA]  text-white text-[16px] font-semibold rounded-xl px-6 py-3'>CONTACT US</button>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-[50%] md:pt-12 sm:pt-12 lg:pt-0 pt-12">
                        <h1 className='text-[24px] font-medium '>Featured Sevices</h1>
                        <div className="sm:flex gap-x-12 mb-12 mt-8 sm:mt-2">
                            <div className="w-[55%]">
                                <div className=' pt-12 px-8 rounded-xl border-black border-[0.5px] pb-3  '>
                                    <div className='px-5'>
                                        <Image src='/images/image11.png' width={275} height={245} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-semibold text-[18px]'>Web Development</h1>
                                        <p className='text-[14px] leading-tight font-semibold'>Creating and providing on demand services to clients by new<br></br> technologies</p>
                                    </div>

                                </div>
                            </div>




                            <div className="sm:mt-0 mt-12 w-[53%]">
                                <div className=' pt-12 px-9 rounded-xl  border-[0.5px] border-black pb-3 '>
                                    <div className='px-5'>
                                        <Image src='/images/image12.png' width={280} height={280} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-semibold text-[18px]'>Web Designing</h1>
                                        <p className='text-[14px] leading-tight font-semibold'>Web Designing Delivering user friendly designs on demand to the clients and companies.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className='container mx-auto  tracking-tighter flex justify-end px-8 md:px-[86px] pt-32'>
                    <div>
                        <span className='text-[#0399DA] font-semibold '>03. WHY StellarStack</span>
                        <h1 className='text-[38px] sm:text-[46px] sm:leading-[60px] font-semibold pt-6'>With StellarStack, you use...</h1>
                    </div>


                </div> */}
            </div>



        </>
    )
}