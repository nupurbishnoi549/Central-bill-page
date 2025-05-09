import React, { useState } from 'react';
import { planComparisons } from '../utils/helper';
import InteriorDesigner from '../assets/images/webp/interior-designer-image.webp'
import CloseArrow from '../assets/images/svg/close.svg'
import OpenArrow from '../assets/images/svg/open.svg'
import Heading from './common/CommonHeading';

const Comprehensive = () => {
    const [openSection, setOpenSection] = useState(1);

    const toggleMenu = (menu) => {
        setOpenSection((prev) => (prev === menu ? null : menu));
    };

    return (
        <div id='services' className='py-[162px] max-xl:py-[80px] max-lg:py-16'>
            <div className="container w-full mx-auto px-5">
                <div className="lg:flex justify-between items-start ">
                    <div className='lg:w-6/12 w-full'>
                        <Heading headingText="Comprehensive Utility" headingSpanText="Comparisons" className="lg:!max-w-[456px] md:!text-center !text-left lg:!text-left !pb-[46px] max-md:!pb-7" />
                        <div className="space-y-6">
                            {planComparisons.map((plan) => (
                                <div
                                    key={plan.id}
                                    className="bg-white hover:shadow-lg rounded-md p-[14px] border border-[#0000001A] transition-all duration-700 ease-in-out"
                                >
                                    <button
                                        onClick={() => toggleMenu(plan.id)}
                                        className="w-full text-left font-medium cursor-pointer text-2xl flex items-center justify-between max-md:text-lg lg:whitespace-nowrap"
                                    >
                                        <div className="flex items-center">
                                            <img className='w-[64px] mr-6 pointer-events-none' src={plan.img} alt={plan.title} />
                                            {plan.title}
                                        </div>
                                        <span className={`text-xl ${plan.marginClass}`}>
                                            {openSection === plan.id ? (
                                                <img
                                                    src={OpenArrow}
                                                    alt="Collapse"
                                                    className="h-5 w-5 transition-all duration-700 rotate-180"
                                                />
                                            ) : (
                                                <img
                                                    src={CloseArrow}
                                                    alt="Expand"
                                                    className="h-5 w-5 transition-all duration-700 rotate-0"
                                                />
                                            )}
                                        </span>
                                    </button>

                                    <div
                                        className={`transition-all duration-700 ease-in-out overflow-hidden ${openSection === plan.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        {openSection === plan.id && (
                                            <p className="-mt-1 text-gray-600 text-base  font-normal leading-[25.6px] ml-[87px]">
                                                {plan.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-6/12 flex justify-end pt-12 max-lg:justify-center max-lg:pt-10'>
                        <img src={InteriorDesigner} alt="designer" className="max-w-[530px] max-lg:mx-auto max-xl:max-w-[465px] max-lg:w-full pointer-events-none transition-all duration-700 hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comprehensive;

