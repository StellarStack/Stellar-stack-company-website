import myimg5 from '../../public/images/image 11.png'
import myimg6 from '../../public/images/image 12.png'
import Image from 'next/image'

export default function Section2() {
    return (
        <>

            <div className="container mx-auto max-w-[1700px]">
                <div className="container mx-auto pt-10 flex">
                    <div className=" w-[50%]">
                        <h1 className="text-[20px]">Check out our full line of our services, that we<br></br> provide in the domain of Information<br></br> Technology globally.
                        </h1>
                        <div className='pt-8'>
                            <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-2'>CONTACT US</button>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <h1 className='text-[24px]'>Featured Sevices</h1>
                        <div className="flex gap-x-12 mb-12 mt-2">
                            <div className="">
                                <div className=' pt-12 px-8 rounded-xl border-black border-[0.5px] pb-3  '>
                                    <div className='px-5'>
                                        <Image src={myimg5} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-semibold text-[18px]'>Web Development</h1>
                                        <h1 className='text-[14px] leading-tight'>Creating and providing on demand services to clients by new<br></br> technologies</h1>
                                    </div>

                                </div>
                            </div>




                            <div className="">
                                <div className=' pt-12 px-8 rounded-xl  border-[0.5px] border-black pb-3 '>
                                    <div className='px-[35px]'>
                                        <Image src={myimg6} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-semibold text-[18px]'>Web Development</h1>
                                        <h1 className='text-[14px] leading-tight'>Creating and providing on demand services to clients by new<br></br> technologies</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container mx-auto  tracking-tighter flex justify-end px-[86px] pt-32'>
                   <div>
                    <span className='text-[#0399DA] font-semibold '>03. WHY StellarStack</span>
                    <h1 className='text-[46px] leading-[60px] font-semibold pt-6'>With StellarStack, you use...</h1>
                </div>
<div className=''>

</div>

            </div>
            </div>



        </>
    )
}