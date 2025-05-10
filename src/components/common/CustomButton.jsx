import React from 'react'
import ButtonArrow from '../../assets/images/svg/arrow.svg'
import BlackButtonArrow from '../../assets/images/svg/black-arrow.svg'

const CustomButton = ({ CustomButton, myClass = "", customClass, customClassBlack, whiteArrow, blackArrow }) => {
    return (
<button className={` ${myClass} font-bold text-white gap-2 cursor-pointer rounded-full hover:scale-90 rounded-tl-none py-3 pl-6 hover:rounded-br hover:rounded-tl-none transition-all duration-700 bg-[#00A8E8] flex items-center text-base`}>{CustomButton}
            <span className={` size-6 ${customClass}`}><img className={`size-6 ${whiteArrow ? "block" : "hidden"}`} src={ButtonArrow} alt="buttonarrow" /></span>
            <span className={` size-6 ${customClassBlack}`}><img className={`size-6 ${blackArrow ? "block" : "hidden"}`} src={BlackButtonArrow} alt="buttonarrow" /></span>

        </button>
    )
}

export default CustomButton