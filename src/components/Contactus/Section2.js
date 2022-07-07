/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Section2() {
    return (
        <>

            <div className="container mx-auto mt-20 px-8 sm:pb-52">
                <div className="">
                    <h1 className="text-[#0399DA] font-medium">02.  <span className="pl-2 font-medium">OUR LOCATION</span></h1>
                </div>
                <div className="">
                    <h1 className="text-[64px] leading-[70px] font-medium   ">We’re all over the world.</h1>
                </div>
                <div className="">
                    <Image src="/images/Line5.png" alt=" " width={1392} height={4} />
                </div>
                <div className="mt-12">
                    <h1 className="text-[40px] font-semibold">ASIA</h1>
                   <div className="sm:flex gap-x-32">
                    <div className="">
                    <h1 className="font-semibold text-[16px] mt-8">ABBOTTABAD,</h1>
                    <h1 className="font-extralight mt-4">StellarStack INTERNATIONAL</h1>
                    <h1 className="font-extralight mt-4"> ST9, Army Burnhall College<br></br> Road,Abbottabad City 22010, Pakistan</h1>
                    <h1 className="mt-12 font-extralight">StellarStack@gmail.com</h1>
                    <Image className="" src="/images/Line35.png" alt=" " width={167} height={1} />
                    <h1 className="mt-4 font-extralight">+92310 5752126</h1>
                    <Image className="" src="/images/Line35.png" alt=" " width={167} height={1} />
                    </div>
                    <div className="">
                    <h1 className="font-semibold text-[16px] mt-8">CANADA,</h1>
                    <h1 className="font-extralight mt-4">StellarStack CO., LTD <br></br>Vancouver, BC, Canada</h1>
                    </div>
                    
                    </div>
                </div>

            </div>

        </>

    )
}
