import React from 'react'
import CustomButton from '../components/common/CustomButton';
import { BENEFITS } from '../utils/helper';
import EnergyImg from '../assets/images/webp/switching-energy-image.webp'

const EnergyPlans = () => {
    return (
        <div id='about' className='py-[162px] max-xl:py-20 max-md:py-16 max-sm:py-[44px] px-5'>
            <div className="container w-full mx-auto">
                <div className="flex justify-between max-lg:flex-wrap max-lg:justify-center">
                    <div className='lg:w-6/12 w-full'>
                        <img src={EnergyImg} alt="EnergyImg" className="max-w-[507px] max-lg:mx-auto max-xl:max-w-[465px] max-lg:w-full pointer-events-none" />
                    </div>
                    <div className='lg:w-6/12 w-full max-lg:pt-10'>
                        <h2 className='font-normal text-5xl max-md:text-3xl leading-[52.8px] text-[#00171F] max-w-[409px] max-lg:max-w-none'><span className='font-bold'>Switching Energy</span> Made Simple</h2>
                        <p className='text-[#00171F] text-base font-normal leading-[24px] max-w-[558px] pt-4 max-lg:max-w-none'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
                        <h4 className='text-[#003459] font-normal text-2xl leading-[26.4px] pt-[38px] max-md:pt-5'>Benefits of Comparing Energy Plans</h4>
                        <div className='max-lg:w-[393px] max-md:w-full max-lg:flex max-lg:justify-center max-md:justify-start'>
                            <ul className="ml-4 pt-7 max-md:py-7 pb-[42px]">
                                {BENEFITS.map((BENEFITS, index) => (
                                    <li key={index}
                                        className={`list-disc text-[#00171F] text-base font-normal leading-6 max-w-[382px] w-full ${index !== 0 ? 'pt-2' : ''}`}
                                    > {BENEFITS}</li>))}
                            </ul>
                        </div>
                        <div className='md:justify-center lg:flex'>
                            <CustomButton CustomButton="Compare With Us" customClass="-mr-4 -ml-1" whiteArrow={true} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EnergyPlans
