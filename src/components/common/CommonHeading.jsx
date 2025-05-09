import React from 'react'

const Heading = ({ headingText, className, headingSpanText, lastHeadingText, spanText }) => {
    return (
        <h2 className={`text-black font-normal lg:text-5xl md:text-[40px] text-3xl leading-[110%] ${className} `}>{headingText} <span className={`font-bold ${spanText} `}>{headingSpanText}</span>{lastHeadingText} <span></span></h2>
    )
}

export default Heading