import Image from "next/image"

export default function Section3() {
    return (
        <>

            <div className="container mx-auto max-w-[1400px] ">
                <div className="mx-4 md:ml-28 mt-20 flex gap-x-20 ">
                    <div className="md:block hidden w-[30%]">
                        <Image src='/images/Circleimage.png' width={300} height={300} alt='' />
                    </div>

                    <div className="md:w-[70%]  sm:mt-24">
                        <h1 className="text-[#0399DA] text-[15px] sm:block hidden sm:text-[60px] sm:leading-[84.67px]">Let’s talk! We have a perfect <br></br>
                            solution for your industry.
                        </h1>
                        <h1 className="text-[#0399DA] sm:px-0 px-20 text-[15px] sm:hidden block sm:text-[60px] sm:leading-[84.67px]">Let’s talk! We have a perfect <br></br>
                            solution for your industry.
                        </h1>
                        <div className="flex gap-x-6  sm:gap-x-12 justify-end mt-12 pr-4">
                            <div className="">
                                <a href="Contactus">
                                    <button className='border-2 border-black   text-black text-[10px] md:text-[16px] font-semibold rounded-2xl px-3 sm:px-6 py-4'>CONTACT SOLUTION</button>
                                </a>
                            </div>
                            <div className="">
                                <a href="Contactus">
                                    <button className='bg-[#0399DA]  text-white text-[10px] sm:text-[16px] font-semibold rounded-2xl px-3 sm:px-6 py-4'>VIEW SOLUTION</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

