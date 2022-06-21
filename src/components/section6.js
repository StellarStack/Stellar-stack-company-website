
import Image from 'next/image'



export default function Section6() {
    return (
        <>

            <div className="container mx-auto pt-24 overflow-hidden max-w-[1400px]">

                <div className="">
                    <div className='ml-[100.03px]  tracking-tighter container mx-auto'>
                        <span className='text-[#0399DA] font-semibold '>05. NEWS</span>
                        <h1 className='text-[54px] leading-[60px] font-semibold pt-1'>Explore Clients that we’ve <br></br>
                            worked for</h1>
                    </div>
                </div>

                <div className="   grid grid-cols-3 mx-auto gap-x-7 pt-12 px-48 ">
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




                <div className="   grid grid-cols-3 mx-auto gap-x-7 pt-12 px-48 ">
                    <div className=''>
                    <Image src='/images/LADS TECH.png' width={374} height={350} alt="" />
                    </div>

                    <div className=''>
                    <Image src='/images/PREMIER ORTHO.png' width={374} height={350} alt="" />
                    </div>


                    <div className=''>
                    <Image src='/images/kabo.png' width={374} height={350} alt="" />
                    </div>
                    <div className="">

                    </div>

                </div>

                <div className='flex justify-center pt-3'>
                    <div className='w-[250px] h-[250px]'>
                    <Image src='/images/PROFIT CURVE.png' width={374} height={350} alt="" />
                    </div>
                    <div className=''></div>
                </div>
            </div>

            <div className='w-[300px] h-[300px] '>
            <Image src='/images/circles.png' width={374} height={350} alt="" />
            </div>


            <div className='mt-28 container mx-auto '>

                <div className='ml-[100.03px]  tracking-tighter '>
                    <span className='text-[#0399DA] font-semibold '>06. GET IN TOUCH</span>
                    <h1 className='text-[54px] leading-[60px] font-semibold pt-1'>Let’s talk! We have a perfect <br></br>
                        solution for your industry.</h1>


                    <div className='flex gap-x-6'>
                        <div className='mt-28'>
                            <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-2'>CONTACT US</button>
                        </div>


                        <div className='mt-28'>
                            <button className='border border-black   text-[16px] font-medium rounded-xl px-6 py-2'>VIEW SOLUTION</button>
                        </div>


                    </div>
                </div>
            </div>

           

        </>
    )
}