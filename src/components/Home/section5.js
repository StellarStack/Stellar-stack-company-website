

import Image from 'next/image'

export default function Section5() {
    return (
        <>
            <div className='container mx-auto mt-44 overflow-hidden max-w-[1400px]'>

                <div className='ml-6 md:ml-[100.03px]  tracking-tighter container mx-auto'>
                    <span className='text-[#0399DA] font-semibold '>04. FEATURED CASE STUDY</span>
                    <h1 className='text-[40px] sm:text-[54px] leading-[60px] font-semibold pt-1 px-4'>Our successful <br></br>
                        implementation stories.</h1>
                </div>

                <div className='pt-20 container mx-auto'>
                    <Image src='/images/Line.png' width={1532.02} height={10} alt="" />
                </div>

                <div className='md:flex gap-x-12'>
                    <div className='md:w-[50%] pt-24'>
                        <h1 className='text-[22px] px-12 md:px-28'>
                            We have worked with number of clients,<br></br> describing and executing the plans deliberately.
                        </h1>
                    </div>
                    <div className='md:w-[50%] pt-20 sm:pt-20 md:pt-20 lg:pt-0 xl:pt-0'>
                        <Image src='/images/image 10.png' width={766} height={450} alt="" />
                    </div>
                </div>

                <div className='mt-28 container mx-auto'>
                    <Image src='/images/Line3.png' width={1532.02} height={10} alt="" />
                </div>
            </div>
        </>
    )
}