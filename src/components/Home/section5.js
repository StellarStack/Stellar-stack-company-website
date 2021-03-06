import Image from 'next/image'

export default function Section5() {
    return (
        <>
            <div className='container mx-auto mt-44 overflow-hidden max-w-[1400px] overflow-x-hidden'>

                <div className='ml-6 md:ml-[100.03px]  tracking-tighter container mx-auto'>
                    <span className='text-[#0399DA] font-semibold '>04. FEATURED CASE STUDY</span>
                    <h1 className='text-[40px] sm:text-[54px] leading-[60px] font-semibold pt-1 '>Our successful <br></br>
                        implementation stories.</h1>
                </div>

                <div className='pt-20 container mx-auto'>
                    <Image src='/images/Line.png' width={1532.02} height={10} alt="" />
                </div>

                <div className='md:flex gap-x-12'>
                    <div className='md:w-[50%] pt-2'>
                        <p className='text-[18px] px-12 md:px-28 font-medium'>

                            We have worked with number of clients,<br></br>
                            describing and executing the plans<br></br>
                            deliberately. The undermentioned<br></br>
                            clients are the ones with whom we have<br></br>
                            worked and collaborated.Not only<br></br>
                            eminence in tasks, but one of our prime<br></br>
                            focus is also to coordinate with clients<br></br>
                            and execute tasks with a constructive<br></br>
                            attitude.We have the excellence of<br></br>
                            creating upstanding designs of novelty<br></br>
                            and firmly believe that these traits<br></br>
                            polish our competence.<br></br>



                        </p>
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


