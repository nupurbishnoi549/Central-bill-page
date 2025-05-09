import React from 'react'
import { LOGOS } from '../utils/helper'
import Heading from './common/CommonHeading'
const CompaniesLogo = () => {
    return (
        <div>
            <div className="lg:container xl:mx-auto w-full px-2">
                <Heading headingText="More than " headingSpanText="80,000" spanText="!text-[#00A8E8]" lastHeadingText="+ companies trust bill central " className=" !text-[38px] max-xl:!-mt-0 max-xl:!pt-10 md:!text-center xl:!text-left max-xl:!mx-auto xl:!max-w-[548px] !leading-[41.8px] max-2xl:!-mt-[70px]" />
                <div className="flex pt-[63px] max-xl:pt-12 max-md:pt-10 pb-4 overflow-auto">
                    {LOGOS.map((item, index) => (
                        <img
                            key={index}
                            className={`pointer-events-none max-w-[126.67px] h-[62px] ${index !== LOGOS.length - 1 ? 'mr-[55px] max-xl:mr-[30px] max-lg:mr-[38px]' : ''}`}
                            src={item.img}
                            alt={item.alt}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CompaniesLogo