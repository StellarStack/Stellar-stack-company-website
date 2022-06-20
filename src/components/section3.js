import Image from 'next/image'
import myimg7 from '../../public/images/Rectangle 15.png'
import myimg8 from '../../public/images/Rectangle 16.png'
import myimg9 from '../../public/images/image 2.png'




export default function Section3() {
    return (
        <>
       <div className=' container mx-auto flex mt-12  max-w-[1700px]'>
        <div className=' relative w-[65%] '>
            <Image src={myimg7}  alt=""/>
        </div>
        <div className='absolute pt-52 pl-[740px] w-[100%]  '>
        <Image c src={myimg8}  alt=""/>
        </div>
        <div className=' absolute pl-[990px] w-[100%] pb- '>
        <Image c src={myimg9}  alt=""/>
        </div>
       </div>

       </>
    )
}
