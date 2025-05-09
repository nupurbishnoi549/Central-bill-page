import React from 'react'
import FooterLogo from '../assets/images/webp/header-logo.webp'
import { quickLinks, servicesData, socialLinks } from '../utils/helper'
import Newsletter from './Newsletter';

const Footer = () => {
    return (
        <footer id='footer' className="bg-[url(./assets/images/webp/Footer-bg.webp)] bg-cover bg-no-repeat px-5">
            <div className="max-w-[1140px] container relative mx-auto lg:pt-[232px] md:pt-[165px] pt-48">
                <div className='absolute top-[-34%] left-[0%]'>
                    <Newsletter />
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <div className="lg:w-1/4">
                        <img src={FooterLogo} alt="FooterLogo" />
                        <p className="mt-4 text-white text-base font-normal">
                            Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing.
                        </p>
                        <h2 className='pt-9 font-bold text-xl text-white'>Follow Us</h2>
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((item, index) => (
                                <a href={item.link} key={index}>
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="w-8 transition-transform duration-300 hover:scale-110"
                                    />
                                </a>
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-wrap gap-y-8 w-full lg:w-2/5">
                        <div className="w-1/2 md:w-1/3 lg:w-1/2">
                            <ul>
                                <li className="font-bold text-xl text-white mb-3">Quick Link</li>
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-white/90 hover:underline font-normal text-[13px] block mb-2">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-1/4">
                            <ul>
                                <li className="font-bold text-xl text-white mb-3">Company</li>
                                {servicesData.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-white/90 hover:underline font-normal  text-[13px] block mb-2">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='border border-[#FFFFFF33] mt-14'></p>
            <p className="text-white text-sm py-5 justify-center flex">
                © 2025 BILL CENTRAL, Inc. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer
