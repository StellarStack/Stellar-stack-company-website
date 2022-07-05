/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Section1() {
    return (
        <>
            <div className="container mx-auto">
                <div className='ml-10 md:ml-[100.03px]  tracking-tighter mt-20'>
                    <span className='text-[#0399DA]  font-bold '>01. WHO ARE WE</span>
                    <h1 className='text-[40px] md:text-[50px] sm:leading-[60px] font-bold pt-6'>StellarStack is a growing <br></br>
                        leader in the IT and Marketing<br></br>industry.</h1>

                    <div className='mt-12'>
                        <p>The standard of excellence in our work provision is well reputed. Along<br></br>
                            with local clients from Pakistan, we have also provided services to<br></br>
                            offshore leading software and marketing firms.</p>
                    </div>


                    <div className='mt-12'>
                        <h1>SERVICES SELECTION OPTIONS</h1>
                    </div>
                </div>
                <div className="sm:flex gap-x-16 ml-10 md:ml-[100.03px] mt-20">
                    <div className='border-1  bg-[#039ada18]  sm:w-full w-[90%] rounded-xl pt-8 px-8 pb-4'>
                        <div className="">
                            <h1>OPTION 01.</h1>
                            <h1 className="pt-12">Contact with StellarStack</h1>
                            <p className="pt-12">To get a quote for your required services in domains of<br></br>
                                designing, development and Marketing reach us out.</p>
                        </div>

                    </div>

                    <div className='border-1  bg-[#039ada18] sm:w-full w-[90%]  rounded-xl pt-8 px-8 pb-4  sm:mt-0 mt-12'>
                        <div className="">
                            <h1>OPTION 02.</h1>
                            <h1 className="pt-7">Contact StellarStack directly</h1>
                            <p className="pt-4">It is customers’ responsibility to ship back the products<br></br>
                                including the shipping cost (round trip), any applicable<br></br>
                                duties and service fees.</p>

                            <p className="pt-2">Please download and fill the RMA form</p>


                            <button className='bg-[#0399DA] mt-8 text-white  rounded-xl px-4 py-2'>RMA FORM DOWNLOAD</button>
                        </div>

                    </div>
                </div>

                <div className="md:flex  ml-10 md:ml-[100.03px] mt-20">
                    <div className='md:w-[43%]'>
                        <div className="">
                            <h1>RMA conditions</h1>
                            <p className="pt-12">RMA service is applicable <span className="font-extrabold">ONLY</span> in the country<br></br>
                                or region where StellarStack products are<br></br>
                                purchased.</p>


                            <p className="pt-6">If users request RMA support outside of the <br></br>
                                countries or regions whereStellarStack <br></br>
                                products are purchased, authorized local <br></br>
                                distributors/partners may request additional <br></br>
                                service fees.</p>
                        </div>

                    </div>

                    <div className='md:mt-0 mt-16 '>
                        <div className="">
                            <h1>Scenarios are not included in warranty</h1>
                            <p className="pt-7">Service fee is required for RMA Service.</p>


                            <ul className="list-disc pt-8 text-[13px] ml-5">
                                <li>Product is out of warranty</li>
                                <li>Damages caused by natural disasters of improper handling/operation</li>
                                <li>Damages caused by disassembling device or installing (additional) unofficial hardware or components</li>
                                <li>Damages caused by modifying software</li>
                                <li>No document of purchase and visible label with serial number</li>
                                <li>Damages caused by not following instructions on manual or false operation</li>
                            </ul>

                        </div>

                    </div>
                </div>



                <div className="md:flex gap-x-24 mt-28">
                    <div className="md:w-[40%] md:px-0 px-8">
                        <Image src='/images/ImageCircles.png' width={600} height={600} alt='' />

                    </div>


                    <div className='md:w-[40%] mt-20 md:px-0 px-8'>

                        <span className='text-[#0399DA]  font-bold '>02. DOWNLOADS</span>
                        <h1 className='text-[40px] md:text-[50px] sm:leading-[60px] font-bold pt-6'>Download our Services  <br></br>
                            datasheets.</h1>

                            <div className="flex md:justify-end ">
                                <div></div>
                                <div className="">
                                <button className='bg-[#0399DA] mt-8 text-white  rounded-xl px-4 py-2'>VIEW DOWNLOADS</button>
                                </div>
                            </div>
                    </div>
                </div>







            </div>


        </>
    )
}