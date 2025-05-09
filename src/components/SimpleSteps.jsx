import React from 'react';
import { SIMPLE_STEPS_LIST } from '../utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from './common/CommonHeading';

const SimpleSteps = () => {
    return (
        <div>
            <div id='how-it-works' className="2xl:container max-sm:px-3 w-full mx-auto">
                <Heading headingText="Simple Steps to " headingSpanText="Switch" className="!pb-4 md:text-center" />
                <p className='font-normal text-base text-[#4B4B4B] max-w-[610px] leading-[25.6px] mx-auto md:text-center pb-[58px] max-md:pb-10 max-md:mx-auto md:px-3 '>
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1024: { slidesPerView: 3, },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {SIMPLE_STEPS_LIST.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <div className='relative group overflow-hidden w-full mx-auto'>
                                <img className='w-full' src={obj.img} alt={obj.alt} />
                                <div className='absolute group-hover:h-0 group-hover:w-0 group-hover:top-1/2 group-hover:left-full group-hover:translate-y-[70%] group-hover:translate-x-[-50%] group-hover:opacity-80 group-hover:z-10 duration-700 ease-in-out bg-[#EAF9FFF0] opacity-94 top-0 left-0 w-full h-full'>
                                    <div className='relative w-full h-full'>
                                        <p className={`absolute translate-x-[-50%] md:text-[32px] text-[22px] font-normal text-center text-[#00171F] -rotate-90 min-w-[574px] group-hover:hidden ${i === 0 ? "top-[47%] left-1/2" : i === 1 ? "top-[65%] left-1/2" : i === 2 ? "top-[71.5%] left-1/2" : i === 3 ? "top-[62.5%] left-1/2" : ""}`}>{obj.imgContent}</p>
                                    </div>
                                </div>
                                <div className='bg-[#003459] absolute top-[-50%] group-hover:top-[73%] group-hover:bottom-0 duration-700 ease-in-out w-full p-5'>
                                    <h4 className='text-[32px] font-normal pb-3 text-white'>{obj.title}</h4>
                                    <p className='text-white text-base'>{obj.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SimpleSteps;