
import facebook from '@/assets/LOGO/facebook.svg'
import instagram from '@/assets/LOGO/instagram.svg'
import github from '@/assets/LOGO/github.svg'
import twitter from '@/assets/LOGO/twitter.svg'
import googlepay from '@/assets/LOGO/googlepay.svg'
import mastercard from '@/assets/LOGO/mastercard.svg'
import applepay from '@/assets/LOGO/applepay.svg'
import paypal from '@/assets/LOGO/paypal.svg'
import visa from '@/assets/LOGO/visa.svg'
import msg from '@/assets/msg.svg'

import { Link } from "react-router";
export function Footer() {
    return (
        <footer className="bg-[#F0F0F0] md:mt-30 md:pt-10 mt-35 pt-25 relative">
            {/* input in footer */}
            <div className="absolute md:-top-20 -top-30 left-0 right-0 z-50 md:flex-row md:justify-between flex-col flex bg-black text-white py-8 rounded-2xl mx-4 px-4 md:mx-12 md:px-12">
                <div className='flex'>
                <h1 className='md:text-4xl text-3xl text-centerw-50 font-black md:w-130 mb-4'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='relative'>
                    <input className='flex py-1.5 pl-12 pr-4 bg-white text-black rounded-full focus:outline-none w-full md:w-90' type="email" placeholder='Enter your email address'required />
                    <img src={msg} alt="msg icon" className='w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2'/>
                </div>
                <button className='flex bg-white  text-black rounded-full hover:bg-black hover:text-white hover:border border-grey  py-1.5 w-full font-semibold justify-center transition cursor-pointer'>Subscribe to Newsletter</button>
            </div>
            </div>
            {/* complete footer details and links */}
            <div className='md:pb-10 pb-6 px-4 mt-5 md:px-12'>
            <div className="flex  py-8 md:flex-row flex-col gap-4   ">
                {/* shop.co intro */}
                <div className='flex flex-col gap-2 md:w-90'>
                    <h1 className="text-2xl md:text-4xl font-extrabold">SHOP.CO</h1>
                <p className='text-sm text-gray-600 mt-2 leading-relaxed'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex flex-row  gap-2 mt-2 md:mt-4'>
                    <Link to='#'><img src={twitter} alt="twitter" /></Link>
                    <Link to='#'><img src={facebook} alt="facebook" /></Link>
                    <Link to='#'><img src={instagram} alt="instagram" /></Link>
                    <Link to='#'><img src={github} alt="github" /></Link>
                </div>
                </div>
                {/* links1 */}
                <div className='flex flex-row md:mx-8 px-4 md:px-0 gap-12 md:gap-28'>
                    {/* company */}
                <div className='flex flex-col gap-4 '>
                    <h4>COMPANY</h4>
                    <ul className='text-sm text-gray-600 flex gap-2 flex-col'>
                        <li><Link to='#'>About</Link> </li>
                        <li><Link to='#'>Features</Link> </li>
                        <li><Link to='#'> Works</Link></li>
                        <li><Link to='#'>Career</Link></li>
                    </ul>
                </div>
                {/* help */}
                <div className='flex flex-col gap-4 '>
                    <h4>HELP</h4>
                    <ul className='text-sm text-gray-600 flex gap-2 flex-col'>
                        <li><Link to='#'>Customer Support</Link> </li>
                        <li><Link to='#'>Delivery Details</Link> </li>
                        <li><Link to='#'>Terms & Conditions</Link></li>
                        <li><Link to='#'>Privacy Policy</Link></li>
                    </ul>
                </div>
                
                </div>
                {/* links 2 */}
                 <div className='flex flex-row md:mx-8 px-4 gap-18 md:gap-28'>
                    {/* faq */}
                <div className='flex flex-col gap-4 '>
                    <h4>FAQ</h4>
                    <ul className='text-sm text-gray-600 flex gap-2 flex-col'>
                        <li><Link to='#'>About</Link> </li>
                        <li><Link to='#'>Features</Link> </li>
                        <li><Link to='#'> Works</Link></li>
                        <li><Link to='#'>Career</Link></li>
                    </ul>
                </div>
                {/* resources */}
                <div className='flex flex-col gap-4 '>
                    <h4>RESOURCES</h4>
                    <ul className='text-sm text-gray-600 flex gap-2 flex-col'>
                        <li><Link to='#'> Free eBooks</Link> </li>
                        <li><Link to='#'>Development Tutorial</Link> </li>
                        <li><Link to='#'>How to - Blog</Link></li>
                        <li><Link to='#'>Youtube Playlist</Link></li>
                    </ul>
                </div>
                </div>
                </div>

                {/* payement and rights */}
                {/* logo */}
                <div className='gap-2 items-center flex md:flex-row flex-col justify-end border-t border-gray-400 py-4'>
                    <div className='flex md:mr-auto text-gray-600 '>
                    Shop.co © 2000-2025, All Rights Reserved
                </div>
                <div className='flex md:justify-end'>
                    <Link to='#'><img src={visa} alt="visa" /></Link>
                    <Link to='#'><img src={mastercard} alt="visa" /></Link>
                    <Link to='#'><img src={paypal} alt="visa" /></Link>
                    <Link to='#'><img src={applepay} alt="visa" /></Link>
                    <Link to='#'><img src={googlepay} alt="visa" /></Link>
                </div>
                </div>

                
                


            </div>
        </footer>
    )         
}


