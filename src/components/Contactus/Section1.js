import Image from "next/image"

export default function Section1() {
    return (
        <>
            <div className="container mx-auto mt-20">
                <div className="">
                    <h1 className="text-[#0399DA] font-semibold sm:px-0 px-8">01.  <span className="pl-2 font-semibold">CONTACT US</span></h1>
                </div>
                <div className="sm:px-0 px-8">
                    <h1 className="text-[64px] leading-[70px] font-extrabold">We’re here to help.</h1>
                </div>

                <div className="sm:flex ">
                    <div className='sm:px-0 px-8 md:w-[40%]'>
                        <div className="mt-12">
                            <h1 className="font-extrabold ">Support Email</h1>
                            <h1 className="">StellarStack@gmail.com</h1>
                        </div>


                        <div className="mt-12">
                            <h1 className="font-extrabold ">Sales Email</h1>
                            <h1 className="">StellarStack@gmail.com</h1>
                        </div>
                    </div>

                    <div className="px-12 md:w-[50%]">
                        <div className="mt-12">
                            <h1 className="text-[14px]">GENERAL ENQUIRE / SERVICE  ENQUIRY / PARTNERSHIP</h1>
                        </div>
                        <div className="">
                            <Image src="/images/Group759.png" alt="" width={829} height={4} />
                        </div>
                        <div className="">
                            <form>
                                <div className="grid xl:grid-cols-2 xl:gap-6 mt-2  ">
                                    <div className="relative z-0 w-full mb-6 group ">
                                        <input type="tel" name="floating_companyname" id="floating_companyname" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                        <label htmlFor="floating_companyname" className="peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">COMPANY NAME*</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_company" id="floating_company" className="block py-4  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NAME*</label>
                                    </div>
                                </div>
                                <div className="grid xl:grid-cols-2 xl:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="tel" name="floating_companyname" id="floating_companyname" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                        <label htmlFor="floating_companyname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">JOB TITLE*</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_company" id="floating_company" className="block py-4  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">COUNTRY*</label>
                                    </div>
                                </div>
                                <div className="grid xl:grid-cols-2 xl:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">EMAIL*</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PHONE*</label>
                                    </div>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="tel"  name="floating_company" id="floating_company" className="block py-6 sm:py-4  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PLEASE SELECT PRODUCT OF INTEREST*</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_company" id="floating_company" className="block py-5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0399DA] focus:outline-none focus:ring-0 focus:border-[#0399DA] peer" placeholder=" " required />
                                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0399DA] peer-focus:dark:text-[#0399DA] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MESSAGE</label>
                                </div>
                                <div className="flex justify-end pt-4 pb-4">
                                    <button type="submit" className="  text-white font-bold bg-[#0399DA] rounded-xl px-3 py-2  ">SEND MESSAGE</button>
                                </div>
                            </form>

                            <div className="">
                                <Image src="/images/Group759.png" alt="" width={829} height={4} />
                            </div>
                        </div>
                    </div>
                </div>
            
            
        </div>

        </>


    )
}