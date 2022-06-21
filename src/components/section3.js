import Image from 'next/image'
import myimg7 from '../../public/images/Rectangle 15.png'
import myimg8 from '../../public/images/Rectangle 16.png'
import myimg9 from '../../public/images/image 2.png'




export default function Section3() {
    return (
        <>
       <div className=' container mx-auto flex mt-12  max-w-[1400px]'>
        <div className=' relative w-[65%] '>
            <Image src='/images/Rectangle 15.png' width={974} height={574} alt=""/>
        </div>
        <div className='absolute pt-52 pl-[740px] w-[100%]  '>
        <Image src='/images/Rectangle 16.png' width={547} height={604} alt=""/>
        </div>
        <div className=' absolute pl-[990px] w-[100%] pb- '>
        <Image src='/images/image 2.png' width={400} height={400} alt=""/>
        </div>
       </div>

       </>
    )
}
