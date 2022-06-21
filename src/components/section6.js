import myimg14 from '../../public/images/SCTE.png'
import myimg15 from '../../public/images/ZIPLINE.png'
import myimg16 from '../../public/images/NGROK.png'
import myimg17 from '../../public/images/LADS TECH.png'
import myimg18 from '../../public/images/PREMIER ORTHO.png'
import myimg19 from '../../public/images/Kabo.png'
import myimg20 from '../../public/images/PROFIT CURVE.png'
import myimg21 from '../../public/images/Circles.png'
import bg from '../../public/images/Footer image.png'
import Image from 'next/image'



export default function Section6() {
    return (
        <>

            <div className="container mx-auto pt-24 overflow-hidden">

                <div className="">
                    <div className='ml-[100.03px]  tracking-tighter container mx-auto'>
                        <span className='text-[#0399DA] font-semibold '>05. NEWS</span>
                        <h1 className='text-[54px] leading-[60px] font-semibold pt-1'>Explore Clients that we’ve <br></br>
                            worked for</h1>
                    </div>
                </div>

                <div className="   grid grid-cols-3 mx-auto gap-x-7 pt-12 px-48 ">
                    <div className=''>
                        <Image src={myimg14} alt='' />
                    </div>

                    <div className=''>
                        <Image src={myimg15} alt='' />
                    </div>


                    <div className=''>
                        <Image src={myimg16} alt='' />
                    </div>
                    <div className="">

                    </div>

                </div>




                <div className="   grid grid-cols-3 mx-auto gap-x-7 pt-12 px-48 ">
                    <div className=''>
                        <Image src={myimg17} alt='' />
                    </div>

                    <div className=''>
                        <Image src={myimg18} alt='' />
                    </div>


                    <div className=''>
                        <Image src={myimg19} alt='' />
                    </div>
                    <div className="">

                    </div>

                </div>

                <div className='flex justify-center pt-3'>
                    <div className='w-[250px] h-[250px]'>
                        <Image className='w-full' src={myimg20} alt='' />
                    </div>
                    <div className=''></div>
                </div>
            </div>

            <div className='w-[300px] h-[300px] '>
                <Image src={myimg21} alt='' />
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