import React from 'react'
import { LOGOS } from '../utils/helper'
import Heading from './common/CommonHeading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const CompaniesLogo = () => {
    return (
        <div>
            <div className="lg:container xl:mx-auto w-full px-2">
                <Heading
                    headingText="More than "
                    headingSpanText="80,000"
                    spanText="!text-[#00A8E8]"
                    lastHeadingText="+ companies trust bill central "
                    className=" !text-[38px] max-xl:!-mt-0 max-xl:!pt-10 md:!text-center xl:!text-left max-xl:!mx-auto xl:!max-w-[548px] !leading-[41.8px] max-2xl:!-mt-[70px]"
                />

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                    breakpoints={{
                        375: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1200: { slidesPerView: 7 },
                    }}
                >
                    {LOGOS.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img
                                className="pointer-events-none max-w-[126.67px] h-[62px] mt-5"
                                src={item.img}
                                alt={item.alt}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CompaniesLogo

