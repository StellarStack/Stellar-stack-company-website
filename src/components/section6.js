import Image from 'next/image'



export default function Section6() {
    return (
        <>

            <div className="container mx-auto pt-24 overflow-hidden max-w-[1400px]">

                <div className="">
                    <div className='px-8 md:ml-[100.03px]  tracking-tighter container mx-auto'>
                        <span className='text-[#0399DA] font-semibold '>05. NEWS</span>
                        <h1 className='text-[36px] md:text-[54px] md:leading-[60px] font-semibold pt-1'>Explore Clients that we’ve <br></br>
                            worked for</h1>
                    </div>
                </div>

                <div className="px-8 sm:px-0 pl-12 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-7 pt-12 md:px-48 ">
                    <div className=''>
                    <Image src='/images/SCTE.png' width={374} height={350} alt="" />
                    </div>

                    <div className=''>
                    <Image src='/images/ZIPLINE.png' width={374} height={350} alt="" />
                    </div>


                    <div className=''>
                    <Image src='/images/NGROK.png' width={374} height={350} alt="" />
                    </div>
                    <div className="">

                    </div>

                </div>




                <div className=" pl-12 sm:pl-0 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-7 pt-12 md:px-48 ">
                    <div className=''>
                    <Image src='/images/LADS TECH.png' width={374} height={350} alt="" />
                    </div>

                    <div className=''>
                    <Image src='/images/PREMIER ORTHO.png' width={374} height={350} alt="" />
                    </div>


                    <div className=''>
                    <Image src='/images/Kabo.png' width={374} height={350} alt="" />
                    </div>
                    <div className="">

                    </div>

                </div>

                <div className=' pl-16 sm:pl-0 sm:flex md:justify-center pt-3'>
                    <div className=''>
                    <Image src='/images/PROFIT CURVE.png' width={374} height={350} alt="" />
                    </div>
                    <div className=''></div>
                </div>
            </div>

            <div className='sm:block hidden '>
            <Image src='/images/Circles.png' width={374} height={350} alt="" />
            </div>


            <div className='mt-28 container mx-auto '>

                <div className='  px-12 sm:ml-[100.03px]  tracking-tighter '>
                    <span className='text-[#0399DA] font-semibold '>06. GET IN TOUCH</span>
                    <h1 className='text-[36px] md:text-[54px] sm:leading-[60px] font-semibold pt-1'>Let’s talk! We have a perfect <br></br>
                        solution for your industry.</h1>


                    <div className='sm:flex gap-x-6'>
                        <div className='mt-28'>
                            <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-3'>CONTACT US</button>
                        </div>


                        <div className=' mt-8 sm:mt-28'>
                            <button className='border border-black   text-[16px] font-medium rounded-xl px-6 py-3'>VIEW SOLUTION</button>
                        </div>


                    </div>
                </div>
            </div>

           

        </>
    )
}