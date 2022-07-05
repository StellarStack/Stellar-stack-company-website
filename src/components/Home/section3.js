import Image from 'next/image'





export default function Section3() {
    return (
        <>

            <div className='container mx-auto  tracking-tighter flex justify-end px-8 md:px-[86px] pt-32'>
                <div>
                    <span className='text-[#0399DA] font-semibold '>03. WHY StellarStack</span>
                    <h1 className='text-[38px] sm:text-[46px] sm:leading-[60px] font-semibold pt-6'>With StellarStack, you use...</h1>
                </div>

            </div>
            <div className='lg:block hidden'>
                <div className=' flex container mx-auto '>

                    <div className='relative'>
                        <Image className=' w-auto ' height={574} width={974} src='/images/Rectangle 15.png' alt='' />
                    </div>

                    <div className='absolute mt-[250px]  lg:left-[63%] 2xl:left-[50%] '>
                        <Image className='  ' height={604} width={547} src='/images/Rectangle 16.png' alt='' />
                    </div>



                </div>
            </div>
            {/* <div className=' container mx-auto relative  flex mt-12  max-w-[1400px]'>
                <div className='relative'>
                    <Image src='/images/Rectangle 15.png' width={974} height={574} alt="" />
                </div>
                <div className='absolute lg:pt-52 right-8   '>
                    <Image src='/images/Rectangle 16.png' width={547} height={604} alt="" />
                </div>
                <div className='absolute -right-8 '>
                    <Image src='/images/image 2.png' width={350} height={350} alt="" />
                </div>
            </div> */}

        </>
    )
}