import Image from "next/image"

export default function Section1() {
    return (
        <>

            <div className="container mx-auto mt-20 overflow-x-hidden ">
                <div className="">
                    <h1 className="text-[#0399DA] font-semibold sm:px-0 px-8">01.  <span className="pl-2 font-semibold">WHO ARE WE</span></h1>
                </div>
                <div className="px-8 sm:px-0">
                    <h1 className="text-[60px] font-extrabold">
                        StellarStack is a growing leader in.<br></br>
                        the IT and Marketing Industry.
                    </h1>
                </div>

                <div className='container  mx-auto mt-12  lg:flex lg:justify-start '>
                    {/* <div className='hidden  lg:relative lg:block '>
                        <Image src='/images/ImageCircles.png' width={550.17} height={550.73} alt="" />
                    </div> */}

                    <div className=' w-[100%]  '>
                        <Image className="  " src='/images/unsplash.png' width={821} height={380} alt="" />
                        </div>
                        </div>
                       
                        <div className="lg:ml-36 lg:text-left text-center flex justify-center">
                            <div className=" ">
                            <div>
                            <h1 className="font-extrabold">Since 2018, we have been helping thousands around<br></br>
                                the world manage their digital identity requirements<br></br>
                                with our innovative services and  solutions.</h1>
                                </div>
                                
                                
                                <div className="mt-20">
                                    <span>Companies, educational institutions, banks, and a growing list of other industries are<br></br>
                                        realizing the benefits of increased efficiencies, all thanks to the IT systems provided<br></br>
                                        from StellarStack</span>
                                </div>
                                <div className="mt-12">
                                    <span >We have a whole portfolio of advanced marketing, IT and designs services for you.<br></br>
                                        From Websites  to User friendly designs, from Marketing campaigns to innovative app<br></br>
                                        development, and all the way to  software and end-to-end solutions, there is always an<br></br>
                                        StellarStack service to provide real-world solutions to your real-world problems.</span>
                                </div>

                                <div className="mt-12">
                                    <span >This zeal for technological excellence, a proven developing strength, and an untiring<br></br>
                                        passion for customer satisfaction are your guarantees of getting nothing but the best<br></br>
                                        identity system that really works for you.</span>
                                </div>

                            </div>
                        </div>
                    
                
            </div>
        </>


    )

}