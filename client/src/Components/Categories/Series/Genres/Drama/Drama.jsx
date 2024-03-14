import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import bettercallsaul from '../../../../../Assets/ImageSections/Series/Genres/Drama/better-call-saul.jpg'
import houseofcards from '../../../../../Assets/ImageSections/Series/Genres/Drama/house-of-cards.jpg'
import house from '../../../../../Assets/ImageSections/Series/Genres/Drama/house.jpg'
import madmen from '../../../../../Assets/ImageSections/Series/Genres/Drama/mad-men.jpg'
import mrrobot from '../../../../../Assets/ImageSections/Series/Genres/Drama/mr-robot.jpg'
import prisonbreak from '../../../../../Assets/ImageSections/Series/Genres/Drama/prison-break.jpg'
import succession from '../../../../../Assets/ImageSections/Series/Genres/Drama/succession.jpg'
import thementalist from '../../../../../Assets/ImageSections/Series/Genres/Drama/the-mentalist.jpg'
import thesopranos from '../../../../../Assets/ImageSections/Series/Genres/Drama/the-sopranos.jpg'
import yellowstone from '../../../../../Assets/ImageSections/Series/Genres/Drama/yellowstone.jpeg'

function Drama() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>DRAMA</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={bettercallsaul} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={houseofcards} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={house} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={madmen} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mrrobot} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={prisonbreak} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={succession} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thementalist} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thesopranos} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={yellowstone} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default Drama