
import Image from 'next/image'


export default function Section1() {
    return (

        <>
            <div className=' mt-12 container mx-auto max-w-[1400px]'>
                <div className='ml-10 md:ml-[100.03px]  tracking-tighter'>
                    <span className='text-[#0399DA] font-semibold '>01. ABOUT US</span>
                    <h1 className='text-[40px] md:text-[50px] sm:leading-[60px] font-semibold pt-6'>StellarStack enables clients to manage<br></br>
                        digital identity by providing them<br></br> eminent services.</h1>
                </div>
                <div className='md:flex gap-x-8'>


                    <div className=' ml-4 sm:ml-[100.03px] pt-20 md:w-[50%]'>
                        <Image src='/images/Imagecircles.png' width={680} height={635} alt="" />
                    </div>

                    <div className='pl-12 md:pl-0 md:w-[60%]'>
                        <h1 className='text-[26px] font-semibold leading-[37px] pt-28'>Since 2018, StellarStack has been helping organizations<br></br> worldwide get reliable  websites  without any fuss. </h1>
                        <h1 className='text-[19px] font-medium leading-[29px] pt-6 '>Businesses, Software firms, Design Studios and Countless customers have<br></br> experienced how StellarStack can help them become more efficient</h1>

                        <div className='pt-6 flex gap-x-2 '>
                            <div className=''>
                                <svg width="10" height="88" viewBox="0 0 14 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="7.44043" x2="7.44043" y2="88" stroke="black" />
                                    <rect width="13.8809" height="32" fill="black" />
                                </svg>
                            </div>

                            <div className='pt-2'>
                                <h1 className='text-[18px] font-bold '>5 YEARS</h1>
                                <h1 className='text-[16px]  font-medium leading-tight'>solid experience in<br></br> Web Development.</h1>
                            </div>


                        </div>



                        <div className=' md:flex gap-x-2  '>
                            <div className=''>
                                <svg width="10" height="88" viewBox="0 0 14 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="7.44043" x2="7.44043" y2="88" stroke="black" />
                                    <rect width="13.8809" height="32" fill="black" />
                                </svg>
                            </div>

                            <div className='pt-2'>
                                <h1 className='text-[18px] font-bold '>80+ PROJECTS</h1>
                                <h1 className='text-[16px]  font-medium leading-tight'> to meet every clients need.</h1>
                            </div>


                        </div>

                        <div className='pt-12 md:pt-0'>
                            <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-2'>GET IN TOUCH</button>
                        </div>


                    </div>

                </div>

                <div className='mt-44 w-[100%]'>
                    <div className= 'px-12 sm:px-0 sm:ml-[100.03px]  tracking-tighter'>
                        <span className='text-[#0399DA] font-semibold '>02. OUR SERVICES</span>
                        <h1 className='text-[40px] sm:text-[54px] sm:leading-[60px] font-semibold pt-8'>StellarStack techstack,<br></br>
                            smart and innovative.</h1>
                    </div>
                </div>

                <div className='pt-[200px]  container mx-auto'>
                <Image src='/images/Line.png' width={1532} height={10} alt="" />
                    </div>
            </div>




        </>
    )
}
