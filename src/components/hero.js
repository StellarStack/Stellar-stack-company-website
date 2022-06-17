import myimg1 from '../../public/images/LOGO TEXT.png'
import Image from 'next/image'
import React from 'react'


export default function Hero() {
    return (

        <div className="container mx-auto ">
<div className='bg-black'>
           
            <div className="">
                <Image src={myimg1} alt="" />
            </div>



            </div>
        </div>

    )
}
