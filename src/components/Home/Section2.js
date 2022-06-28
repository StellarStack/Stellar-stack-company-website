import Image from 'next/image'

export default function Section2() {
    return (
        <>

            <div className="container mx-auto max-w-[1400px]">
                <div className="container mx-auto pt-10 lg:flex lg:px-0 md:px-12 sm:px-12 px-12">
                    <div className=" md:w-[50%]">
                        <h1 className="text-[20px]">Check out our full line of our services, that we<br></br> provide in the domain of Information<br></br> Technology globally.
                        </h1>
                        <div className='pt-8'>
                            <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-3'>CONTACT US</button>
                        </div>
                    </div>

                    <div className="lg:w-[50%] md:pt-12 sm:pt-12 lg:pt-0 pt-12">
                        <h1 className='text-[24px] '>Featured Sevices</h1>
                        <div className="sm:flex gap-x-12 mb-12 mt-8 sm:mt-2">
                            <div className="">
                                <div className=' pt-12 px-8 rounded-xl border-black border-[0.5px] pb-3  '>
                                    <div className='px-5'>
                                        <Image src='/images/image11.png' width={275} height={245} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-semibold text-[18px]'>Web Development</h1>
                                        <h1 className='text-[14px] leading-tight'>Creating and providing on demand services to clients by new<br></br> technologies</h1>
                                    </div>

                                </div>
                            </div>




                            <div className="sm:mt-0 mt-12">
                                <div className=' pt-12 px-8 rounded-xl  border-[0.5px] border-black pb-3 '>
                                    <div className='px-4'>
                                        <Image src='/images/image12.png' width={325} height={325} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-semibold text-[18px]'>Web Designing</h1>
                                        <h1 className='text-[14px] leading-tight'>8 Fever Detection & Facial <br></br>Recognition Terminal</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container mx-auto  tracking-tighter flex justify-end px-8 md:px-[86px] pt-32'>
                    <div>
                        <span className='text-[#0399DA] font-semibold '>03. WHY StellarStack</span>
                        <h1 className='text-[38px] sm:text-[46px] sm:leading-[60px] font-semibold pt-6'>With StellarStack, you use...</h1>
                    </div>


                </div>
            </div>



        </>
    )
}