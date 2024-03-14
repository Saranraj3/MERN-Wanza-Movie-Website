import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import altreadcarbon from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/altread-carbon.jpg'
import blackmirror from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/black-mirror.jpg'
import foundation from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/foundation.jpg'
import invasion from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/invasion.jpg'
import lostinspace from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/lost-in-space.jpg'
import theexpanse from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/the-expanse.jpg'
import theoa from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/the-oa.jpg'
import theperipheral from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/the-peripheral.jpg'
import upload from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/upload.jpg'
import westworld from '../../../../../Assets/ImageSections/Series/Genres/SCI-FI/westworld.jpg'

function Scifi() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>SCI-FI</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={altreadcarbon} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={blackmirror} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={foundation} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={invasion} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lostinspace} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theexpanse} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theoa} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theperipheral} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={upload} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={westworld} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default Scifi