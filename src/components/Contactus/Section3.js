import Image from "next/image"

export default function Section3() {
    return (
        <>
            <div className="container mx-auto mt-20">
                <div className="mx-20 ">
                    <div className="">
                        <h1 className="text-[#0399DA] font-semibold sm:px-0 px-8">03.<span className="pl-2 font-semibold">WHY STELLAR STACK</span></h1>
                    </div>
                    <div className="flex ">
                        <div className="sm:px-0 px-8   absolute">
                            <h1 className="text-[60px] z-20 font-extrabold">With our highly experienced<br></br> team of IT and design<br></br> experts, we proudly offer:</h1>
                        </div>
                        <div className=" relative -z-20 left-[58%] ">
                            <Image src='/images/image1.png' alt='' width={321} height={347} />
                        </div>
                    </div>
                </div>
                <div className="pl-[520px] flex gap-x-16 mt-20">
                    <div className="">
                        <Image src='/images/Line46.png' width={316} height={1} alt='' />
                        <div className="pt-8 pb-8">
                            <h1 className="font-extrabold">01.</h1>
                            <h1>Full-Range Web Development Services</h1>
                        </div>
                        <div className="">
                            <Image src='/images/Line46.png' width={316} height={1} alt='' />
                        </div>

                        <div className="pt-8 pb-8">
                            <h1 className="font-extrabold">03.</h1>
                            <h1>Finding right marketing campaigns </h1>
                        </div>


                    </div>



                    <div className="">
                        <Image src='/images/Line46.png' width={316} height={1} alt='' />
                        <div className="pt-8 pb-8">
                            <h1 className="font-extrabold">02.</h1>
                            <h1 className="">User Friendly and appeling designs</h1>
                        </div>
                        <div className="">
                            <Image src='/images/Line46.png' width={316} height={1} alt='' />
                        </div>

                    </div>

                </div>
                <div className="ml-[520px] mt-20">
                    <h1 className="text-[25px] font-extrabold">Together, let’s build a easy and <span className="font-extrabold text-[#0399DA]">modern</span> world.</h1>
                </div>
                <div className="flex justify-end pr-16 mt-20">
                    <div></div>
                    <div className="">
                        <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-3'>GET IN TOUCH</button>
                    </div>
                </div>
            </div>

        </>
    )
}