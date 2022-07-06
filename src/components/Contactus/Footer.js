
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className='footer mt-28'>

                <div className='container justify-between mx-auto md:flex '>
                    <div className='pt-12 pl-16 md:pt-32'>
                       <a href='Contactus'> 
                       <button className='bg-[#0399DA]  text-white text-[16px] font-medium rounded-xl px-6 py-3'>GET IN TOUCH</button>
                       </a>
                    </div>
                    <div className='flex justify-center px-16 pt-12 text-white md:px-0 gap-x-8 md:pt-32'>
                        <div className=''>
                            <span className='cursor-pointer'>EXPLORE</span>
                            <ul className='pt-4 list-none'>
                                <li className='cursor-pointer'>Services</li>
                                <li className='pt-1 cursor-pointer'>Solutions</li>
                                <a href='Support'><li className='pt-1'>Support</li></a>
                            </ul>
                        </div>

                        <div className=''>
                            <span className='cursor-pointer'>COMPANY</span>
                            <ul className='pt-4 list-none'>
                            <a href='Aboutus'> 
                                <li className='cursor-pointer'>About</li>
                                </a>
                                <li className='pt-1 cursor-pointer'>News</li>
                                <li className='pt-1 cursor-pointer'>Contact</li>
                            </ul>
                        </div>



                        <div className='hidden sm:block'>
                            <span className='cursor-pointer'> LOCATIONS</span>
                            <ul className='pt-4 list-none'>
                            <a href='Contactus'> 
                                <li className='pt-1 cursor-pointer'>Asia</li>
                                </a>
                                <a href='Contactus'> 
                                <li className='pt-1 cursor-pointer'>Europe</li>
                                </a>
                            </ul>
                        </div>


                        <div className=''>
                            <span className='cursor-pointer'>SOCIALS</span>

                            <svg className='pt-4 pl-2 cursor-pointer' width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_367_64)">
                                    <path d="M25.5612 25.5618H21.1161V18.6005C21.1161 16.9406 21.0865 14.8037 18.8042 14.8037C16.4891 14.8037 16.1348 16.6123 16.1348 18.4797V25.5614H11.6899V11.2462H15.9571V13.2025H16.0168C16.4439 12.4723 17.061 11.8716 17.8024 11.4644C18.5438 11.0572 19.3818 10.8587 20.2271 10.8901C24.7324 10.8901 25.563 13.8535 25.563 17.7087L25.5612 25.5618ZM6.67429 9.28953C5.24964 9.28976 4.09452 8.135 4.09429 6.71035C4.09405 5.2857 5.2487 4.13058 6.67335 4.13035C8.098 4.13 9.25311 5.28476 9.25335 6.70941C9.25347 7.39356 8.98182 8.04973 8.49816 8.53359C8.0145 9.01746 7.35843 9.28937 6.67429 9.28953ZM8.89686 25.5619H4.44714V11.2462H8.89675L8.89686 25.5619ZM27.7772 0.00218343H2.21354C1.00534 -0.0114103 0.0145215 0.956441 -0.000244141 2.16464V27.8349C0.0140527 29.0437 1.00476 30.0125 2.21343 29.9998H27.7772C28.9884 30.0148 29.983 29.046 29.9998 27.8349V2.16265C29.9825 0.952105 28.9878 -0.0156291 27.7772 0.000191237" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_367_64">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg className='pt-4 pl-2 cursor-pointer' width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_367_66)">
                                    <path d="M30 3.65328C28.8766 4.26287 27.685 4.663 26.4649 4.84037C27.7358 3.90735 28.7116 2.42989 29.1711 0.669504C27.963 1.54766 26.6412 2.16638 25.2628 2.49893C24.14 1.03381 22.5405 0.118164 20.7702 0.118164C17.3711 0.118164 14.6152 3.49367 14.6152 7.65692C14.6152 8.24788 14.6696 8.82319 14.7745 9.3751C9.6593 9.06061 5.12414 6.05931 2.0884 1.49816C1.55871 2.61161 1.2552 3.90678 1.2552 5.28821C1.2552 7.90381 2.34188 10.2112 3.99328 11.5632C3.01588 11.5257 2.05998 11.2024 1.20539 10.6202C1.20504 10.6518 1.20504 10.6833 1.20504 10.7151C1.20504 14.3677 3.3266 17.4148 6.14215 18.1074C5.2358 18.4093 4.28511 18.4535 3.3627 18.2366C4.14586 21.2317 6.41895 23.4112 9.11215 23.4722C7.0057 25.4941 4.35176 26.6995 1.46824 26.6995C0.971367 26.6995 0.481523 26.6637 0 26.5941C2.72379 28.7331 5.95898 29.9812 9.43477 29.9812C20.7559 29.9812 26.9466 18.4935 26.9466 8.53123C26.9466 8.20424 26.9407 7.87912 26.9288 7.55587C28.1337 6.48891 29.1737 5.16737 30 3.65328Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_367_66">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>



                            <svg className='pt-4 pl-2 cursor-pointer' width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_367_68)">
                                    <path d="M28.3443 30.0001C29.2586 30.0001 30 29.2588 30 28.3444V1.65574C30 0.741211 29.2586 0 28.3443 0H1.65574C0.741094 0 0 0.741211 0 1.65574V28.3444C0 29.2588 0.741094 30.0001 1.65574 30.0001H28.3443Z" fill="white" />
                                    <path d="M16.585 30.0003V18.3827H20.4847L21.0685 13.8552H16.585V10.9644C16.585 9.65352 16.9491 8.7602 18.8289 8.7602L21.2265 8.75914V4.70973C20.8116 4.65453 19.3885 4.53125 17.7329 4.53125C14.2761 4.53125 11.9096 6.64121 11.9096 10.5161V13.8552H8V18.3827H11.9096V30.0003H16.585Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_367_68">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>



                <div className=''>

                    <div className='container pt-12 mx-auto text-center sm:pt-12 md:pl-16 sm:text-center md:text-center lg:text-right md:flex gap-x-32'>
                        <div className='text-white '>
                            <h1 className='cursor-pointer'>copyright © 2021 StellarStack All right reserved</h1>
                        </div>


                        <div className='text-white cursor-pointer '>
                           <a href='Terms'><button><h1>Term’s & Conditions</h1></button></a>
                        </div>


                        <div className='text-white '>
                          <a href='Privacy'><h1>Privacy Policy</h1></a>  
                        </div>

                    </div>
                    <div className='container pt-2 mx-auto pl-14' >
                        <Image src='/images/Line4.png' width={1341} height={10} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}