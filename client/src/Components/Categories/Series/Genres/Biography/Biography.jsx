import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import blackbird from '../../../../../Assets/ImageSections/Series/Genres/Biography/black-bird.jpg'
import dahmer from '../../../../../Assets/ImageSections/Series/Genres/Biography/dahmer.jpg'
import elchapo from '../../../../../Assets/ImageSections/Series/Genres/Biography/el-chapo.png'
import marcopolo from '../../../../../Assets/ImageSections/Series/Genres/Biography/marco-polo.jpg'
import narcos from '../../../../../Assets/ImageSections/Series/Genres/Biography/narcos.jpg'
import spartacus from '../../../../../Assets/ImageSections/Series/Genres/Biography/spartacus.jpg'
import thecrowdedroom from '../../../../../Assets/ImageSections/Series/Genres/Biography/the-crowded-room.jpg'
import thecrown from '../../../../../Assets/ImageSections/Series/Genres/Biography/the-crown.jpg'
import thegreat from '../../../../../Assets/ImageSections/Series/Genres/Biography/the-great.jpg'
import theoffer from '../../../../../Assets/ImageSections/Series/Genres/Biography/the-offer.jpg'

function Biography() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>BIOGRAPHY</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={blackbird} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dahmer} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={elchapo} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={marcopolo} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={narcos} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={spartacus} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thecrowdedroom} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thecrown} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thegreat} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theoffer} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default Biography