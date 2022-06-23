import Image from 'next/image'





export default function Section3() {
    return (
        <>
            <div className=' container mx-auto hidden  xl:block xl:flex mt-12  max-w-[1400px]'>
                <div className=' lg:relative lg:w-[65%] '>
                    <Image src='/images/Rectangle 15.png' width={974} height={574} alt="" />
                </div>
                <div className='lg:absolute lg:pt-52 lg:pl-[740px] w-[100%]  '>
                    <Image src='/images/Rectangle 16.png' width={547} height={604} alt="" />
                </div>
                <div className=' lg:absolute lg:pl-[990px] w-[100%] pb- '>
                    <Image src='/images/image 2.png' width={400} height={400} alt="" />
                </div>
            </div>

        </>
    )
}
