import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import defendingjacob from '../../../../../Assets/ImageSections/Series/Genres/Crime/defending-jacob.jpg'
import dexter from '../../../../../Assets/ImageSections/Series/Genres/Crime/dexter.jpg'
import mareofeasttown from '../../../../../Assets/ImageSections/Series/Genres/Crime/mare-of-easttown.jpg'
import mindhunter from '../../../../../Assets/ImageSections/Series/Genres/Crime/mindhunter.jpg'
import mrmercedes from '../../../../../Assets/ImageSections/Series/Genres/Crime/mr-mercedes.jpg'
import sharpobjects from '../../../../../Assets/ImageSections/Series/Genres/Crime/sharp-objects.jpg'
import sherlock from '../../../../../Assets/ImageSections/Series/Genres/Crime/sherlock.jpg'
import thekilling from '../../../../../Assets/ImageSections/Series/Genres/Crime/the-killing.jpg'
import theoutsider from '../../../../../Assets/ImageSections/Series/Genres/Crime/the-outsider.jpg'
import thesinner from '../../../../../Assets/ImageSections/Series/Genres/Crime/the-sinner.jpg'

function Crime() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>CRIME</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={defendingjacob} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dexter} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mareofeasttown} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mindhunter} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mrmercedes} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sharpobjects} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sherlock} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thekilling} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theoutsider} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thesinner} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default Crime