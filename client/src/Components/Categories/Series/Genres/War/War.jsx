import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import allthelightwecannotsee from '../../../../../Assets/ImageSections/Series/Genres/War/all-the-light-we-cannot-see.jpg'
import bandofbrothers from '../../../../../Assets/ImageSections/Series/Genres/War/band-of-brothers.jpg'
import enlisted from '../../../../../Assets/ImageSections/Series/Genres/War/enlisted.jpg'
import rougheheros from '../../../../../Assets/ImageSections/Series/Genres/War/roughe-heros.jpg'
import sealteam from '../../../../../Assets/ImageSections/Series/Genres/War/seal-team.jpg'
import six from '../../../../../Assets/ImageSections/Series/Genres/War/six.jpg'
import strikeback from '../../../../../Assets/ImageSections/Series/Genres/War/strike-back.jpg'
import thelongroad from '../../../../../Assets/ImageSections/Series/Genres/War/the-long-road.jpg'
import thepacific from '../../../../../Assets/ImageSections/Series/Genres/War/the-pacific.jpg'
import worldonfire from '../../../../../Assets/ImageSections/Series/Genres/War/world-on-fire.jpeg'

function War() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>WAR</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={allthelightwecannotsee} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={bandofbrothers} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={enlisted} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rougheheros} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sealteam} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={six} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={strikeback} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thelongroad} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thepacific} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={worldonfire} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default War