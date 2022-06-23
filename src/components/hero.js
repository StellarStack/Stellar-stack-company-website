import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className='hero pb-20 md:pb-[280px] flex justify-center  text-center  '>
                <div className='text-white pt-20 md:pt-[300px] leading-none'>
                    <h1  className='text-[40px]  md:text-[80px]'>Build Real-Time<br></br>
                        <span className='text-[40px] md:text-[80px] text-blue-600 '>Apps & Services</span></h1>
                    <h1 className='pt-8 text-[20px] md:text-[30px] text-center'>Smart solutions and digital experiences for organizations.</h1>

                    <div className=' pt-12 '>
                        <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-4'>GET IN TOUCH</button>
                    </div>
                </div>
            </div>




        </>
    )
}
