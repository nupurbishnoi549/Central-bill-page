import React from 'react'
import HeroImg from '../assets/images/webp/hero-image.webp'
import CustomButton from './common/CustomButton'
import Header from './common/Header'
import Heading from './common/CommonHeading'
const Hero = () => {
    return (
        <div className="bg-[url(./assets/images/webp/hero-bg-image.webp)] bg-cover bg-no-repeat max-2xl:bg-contain bg-top max-xl:bg-cover max-lg:pb-12">
            <Header />
            <div className="container px-5 w-full mx-auto">
                <div className="flex max-lg:flex-col gap-8 ">
                    <div className="lg:w-6/12 w-full text-center lg:text-left flex flex-col pt-[122px] max-lg:pt-10 max-md:pt-[44px]">
                        <Heading headingText="Easily Compare " headingSpanText="Energy, Gas, and Internet" lastHeadingText=" Plans" className="!text-white md:!text-[64px]" />
                        <p className="text-base font-normal text-white leading-custom-2xl pt-4 pb-[42px] lg:mx-auto xl:mx-0 max-lg:pb-6 max-md:text-sm max-sm:pt-2 lg:max-w-[526px]">
                            Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.
                        </p>
                        <div className='flex p-[9px] pl-[22px] bg-white rounded-full border border-[#00000033] rounded-tl-none items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto'>
                            <input type="text" placeholder='Start typing your address' className='placeholder:text-[#00171F] opacity-[50%] placeholder:text-base placeholder:font-normal w-full !outline-none !bg-transparent placeholder:max-lg:text-sm mr-2' />
                            <CustomButton CustomButton="Compare" customClass="-mr-4" whiteArrow={true} />
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full max-lg:justify-center items-center flex pt-[55px] max-lg:pt-5 max-md:pt-[24px]">
                        <img src={HeroImg} alt="HeroImg" className="max-w-[621px] max-xl:max-w-[473px] max-lg:w-full relative z-10 max-xl:z-0 pointer-events-none -mb-[63px] max-2xl:-mb-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
