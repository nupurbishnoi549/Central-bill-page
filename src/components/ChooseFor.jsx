import React from 'react'
import { cardData } from '../utils/helper'
import RightArrow from '../assets/images/svg/rightArrow.svg'
import Heading from './common/CommonHeading';

const ChooseFor = () => {
    return (
        <div id='why-us' className='pb-[162px] max-xl:pb-[0px] max-md:pb-16 max-sm:pb-[44px]'>
            <div className="container w-full mx-auto px-5">
                <Heading headingText="Why Choose Us for " headingSpanText="Utilities" className="!pb-4 md:text-center" />
                <p className='pb-[58px] max-md:pb-7 text-[#00171F] text-base font-normal max-w-[620px] md:text-center mx-auto'>
                    This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!
                </p>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="bg-[#003459] p-10 rounded-md">
                        <div className="md:flex lg:flex-col justify-between">
                            <img src={cardData[0].img} alt={cardData[0].title} className="xl:w-[277px] w-[200px] pointer-events-none" />
                            <div className="flex-col">
                                <h3 className="font-normal text-2xl text-white pt-7 pb-3">{cardData[0].title}</h3>
                                <p className="font-normal text-base text-white xl:max-w-[344px] max-w-[300px]">{cardData[0].description}</p>
                                <a href="#">
                                    <img
                                        className="bg-white py-[12px] px-[24px] mt-[22px] rounded-[446px] transition-all duration-300 hover:bg-blue-500 hover:scale-110"
                                        src={RightArrow}
                                        alt="right-arrow"
                                    />
                                </a>


                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-[2]">
                        {cardData.slice(1).map((card) => (
                            <div key={card.id} className="border border-[#00171F1A] shadow-lg rounded-md p-6">
                                <img src={card.img} alt={card.title} className='pointer-events-none' />
                                <h3 className="font-normal text-2xl text-black pt-7 pb-3">{card.title}</h3>
                                <p className="font-normal text-base text-[#00171F]">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseFor