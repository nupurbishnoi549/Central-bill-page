import React, { useEffect, useState } from 'react'
import { HEADER_LIST } from '../../utils/helper';
import CustomButton from './CustomButton';
import HeaderLogo from '../../assets/images/webp/header-logo.webp'

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeNavbar = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className='pt-4 overflow-hidden min-[1921px]:max-w-[1920px] relative z-10 mx-auto' >
            <div className='container w-full mx-auto flex px-5 !justify-between items-center'>
                <div className='relative z-20'>
                    <a href="#"><img className='max-w-[105px]' src={HeaderLogo} alt="logo" /></a>
                </div>
                <div className={`flex gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center  ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-black max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full justify-center items-center' : 'max-lg:-left-full max-lg:hidden'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <div key={i}>
                            <ul>
                                <li className='flex gap-1 cursor-pointer flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                    <a onClick={closeNavbar} href={obj.link} className=' text-base font-normal hover:underline transition-all duration-500 ease-linear text-white'>{obj.title}</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                    <CustomButton CustomButton="Get Started" myClass='!pr-5 !pl-5 !text-black !bg-white lg:hidden block' blackArrow={true} customClassBlack="-ml-9" />
                </div>
                <CustomButton CustomButton="Get Started" myClass='!pr-5 !pl-5 !text-black !bg-white max-lg:hidden' blackArrow={true} customClassBlack="-ml-9" />
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex'>
                    <span className={`${open ? 'w-8 h-1 bg-white  rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -translate-x-10 opacity-0 ' : 'w-8 h-1 rounded bg-white'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header