import bg from '../../public/images/Footer image.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className='footer mt-28'>

                <div className='container mx-auto'>
                    <div className='pt-32 pl-16'>
                        <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-2'>GET IN TOUCH</button>
                    </div>
                    <div className=''>
                        <span>EXPLORE</span>
                        <span>Products</span>
                        <span>Products</span>
                    </div>

                </div>
            </div>
        </>
    )
}