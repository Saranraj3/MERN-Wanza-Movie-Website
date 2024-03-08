import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import rock from '../../../../Assets/ImageSections/Series/Sitcoms/30-rock.jpg'
import brooklynninenine from '../../../../Assets/ImageSections/Series/Sitcoms/brooklyn-nine-nine.jpg'
import community from '../../../../Assets/ImageSections/Series/Sitcoms/community.jpg'
import friends from '../../../../Assets/ImageSections/Series/Sitcoms/friends.jpg'
import howimetyourmother from '../../../../Assets/ImageSections/Series/Sitcoms/how-i-met-your-mother.jpg'
import modernfamily from '../../../../Assets/ImageSections/Series/Sitcoms/modern-family.jpg'
import seinfeld from '../../../../Assets/ImageSections/Series/Sitcoms/seinfeld.jpg'
import thebigbangtheory from '../../../../Assets/ImageSections/Series/Sitcoms/the-big-bang-theory.jpg'
import theoffice from '../../../../Assets/ImageSections/Series/Sitcoms/the-office.jpg'
import youngsheldon from '../../../../Assets/ImageSections/Series/Sitcoms/young-sheldon.jpg'

function Sitcoms() {
    const [slider, setSlider] = useState(0)
    const [arrow, setArrow] = useState(false)

    const listRef = useRef()

    const handleClick = (direction) => {
        setArrow(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === 'left' && slider > 0) {
            setSlider(slider - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === 'right' && slider < 8) {
            setSlider(slider + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>SITCOMS</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rock} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>30 Rock</p>
                <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={brooklynninenine} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Brooklyn Nine Nine</p>
                <img className='ml-[3.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={community} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Community</p>
                <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={friends} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Friends</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={howimetyourmother} alt="" />
                <p className='ml-[-15.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>How I Met Your Mother</p>
                <img className='ml-[3.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={modernfamily} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Modern Family</p>
                <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={seinfeld} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Seinfeld</p>
                <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thebigbangtheory} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Big Bang Theory</p>
                <img className='ml-[3rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theoffice} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Office </p>
                <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={youngsheldon} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Young Sheldon</p>
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default Sitcoms