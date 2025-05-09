import React from 'react';
import { testimonialsData } from '../utils/helper.js';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import Heading from './common/CommonHeading.jsx';
import ratingImage from '../assets/images/svg/five-star.svg';

const Testimonials = () => {
    return (
        <div id='testimonials' className=':py-[162px] max-xl:py-[60px] max-md:py-16 max-sm:py-[44px]'>
            <div className="container max-w-[1284px] mx-auto px-5">
                <Heading headingText="Our " headingSpanText="Testimonials" className="md:text-center max-w-[565px] mx-auto !pb-4 max-md:!pb-2" />
                <p className='font-normal text-base text-[#00171F] md:text-center max-w-[490px] mx-auto'>
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>

                <div className='pt-[62px] max-md:pt-8 relative'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1, centeredSlides: false },
                            640: { slidesPerView: 2, centeredSlides: false },
                            1020: { slidesPerView: 3, centeredSlides: false },
                        }}
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={false}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='shadow-lg border border-[#0000001A] p-5 rounded-md'>
                                    <div className='flex pb-6'>
                                        <img className='max-w-[60px]' src={testimonial.img} alt={testimonial.name} />
                                        <div className='flex-col pl-2'>
                                            <p className='font-normal text-2xl leading-[36px]'>{testimonial.name}</p>
                                            <p className='font-normal text-base opacity-55'>{testimonial.username}</p>
                                        </div>
                                    </div>
                                    <img src={ratingImage} alt="Rating stars" />
                                    <p className='pt-[18px] max-w-[324px] text-base font-normal leading-6'>
                                        {testimonial.description}
                                    </p>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="custom-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center max-xl:hidden border-black border justify-center absolute top-1/2 left-[-65px] transform translate-y-[32%] z-10 hover:bg-black hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="custom-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center max-xl:hidden justify-center border-black border absolute top-1/2 right-[-65px] transform translate-y-[32%] z-10 hover:bg-black hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;