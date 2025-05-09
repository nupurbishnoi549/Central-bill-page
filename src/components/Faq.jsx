import React, { useState } from 'react'
import { faqData } from '../utils/helper';
import Heading from './common/CommonHeading';

const Faq = () => {
    const [openSection, setOpenSection] = useState(0)

    const toggleMenu = (id) => {
        setOpenSection(openSection === id ? null : id)
    }

    return (
        <div id='faq' className='pt-[162px] max-xl:pt-[0px] pb-[327px] max-lg:pt-0'>
            <div className="w-full px-5">
                <div className="max-w-[850px] mx-auto">
                    <Heading headingText="Frequently Asked " headingSpanText="Questions" className="w-[620px] max-lg:w-[520px] max-md:w-full !mx-auto" />
                    <p className='text-base font-normal leading-[150%] max-w-[556px] mx-auto md:text-center pt-4 pb-14'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
                    <div className="space-y-6">
                        {faqData.map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-md p-6 transition-all duration-400 ease-in-out ${openSection === index
                                    ? 'bg-[#003459] py-6'
                                    : 'shadow-[0_4px_23.2px_0_#00000014] py-6 border border-transparent'
                                    }`}
                            >

                                <button
                                    onClick={() => toggleMenu(index)}
                                    className={`w-full text-left font-normal cursor-pointer text-2xl flex leading-[26.4px] items-center max-md:text-lg ${openSection === index ? 'text-white' : 'text-[#00171F]'
                                        }`}
                                >
                                    {plan.question}
                                    <span className="ml-auto">
                                        <span className={`size-7 rounded-full border-2 flex justify-center ${openSection === index ? 'border-white text-white' : 'border-[#00171F] text-[#00171F]'
                                            }`}>
                                            <span className="text-lg items-center flex justify-center">
                                                {openSection === index ? '−' : '+'}
                                            </span>
                                        </span>
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-700 ease-in-out overflow-hidden ${openSection === index
                                        ? 'max-h-[200px] opacity-100 pt-4'
                                        : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    {openSection === index && (
                                        <p className="text-white text-base font-normal leading-[25.6px] max-w-[722px]">
                                            {plan.answer}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
