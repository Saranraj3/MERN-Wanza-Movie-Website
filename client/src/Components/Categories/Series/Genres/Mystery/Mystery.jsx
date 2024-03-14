import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import eleventwentytwosixtythree from '../../../../../Assets/ImageSections/Series/Genres/Mystery/11,22,63.jpg'
import eightyninety from '../../../../../Assets/ImageSections/Series/Genres/Mystery/1899.jpg'
import behindhereyes from '../../../../../Assets/ImageSections/Series/Genres/Mystery/behind-her-eyes.jpg'
import biglittlelies from '../../../../../Assets/ImageSections/Series/Genres/Mystery/big-little-lies.jpg'
import lupin from '../../../../../Assets/ImageSections/Series/Genres/Mystery/lupin.jpg'
import manifest from '../../../../../Assets/ImageSections/Series/Genres/Mystery/manifest.jpg'
import sense8 from '../../../../../Assets/ImageSections/Series/Genres/Mystery/sense8.jpg'
import taboo from '../../../../../Assets/ImageSections/Series/Genres/Mystery/taboo.jpeg'
import theleftovers from '../../../../../Assets/ImageSections/Series/Genres/Mystery/the-leftovers.jpg'
import wednesday from '../../../../../Assets/ImageSections/Series/Genres/Mystery/wednesday.jpg'
function Mystery() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>MYSTERY</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={eleventwentytwosixtythree} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={eightyninety} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={behindhereyes} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={biglittlelies} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lupin} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={manifest} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sense8} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={taboo} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theleftovers} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={wednesday} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

  )
}

export default Mystery