import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ahauntinginvenice from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/a-huanting-in-venice.jpg'
import badtimesatelroyale from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/bad-times-at-el-royale.jpg'
import enolaholmes from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/enola-holmes2.jpg'
import gonegirl from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/gone-girl.jpg'
import knockatthecabin from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/knock-at-the-cabin.jpg'
import readyornot from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/ready-or-not.jpg'
import shutterisland from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/shutter-island.jpg'
import thegirlwithdragontattoo from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/the-girl-with-the-dragon-tattoo.jpg'
import theprestige from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/the-prestige.jpg'
import theshining from '../../../../../Assets/ImageSections/Movies/Genres/Mystery/the-shining.jpg'

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
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={ahauntinginvenice} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={badtimesatelroyale} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={enolaholmes} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={gonegirl} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={knockatthecabin} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={readyornot} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={shutterisland} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thegirlwithdragontattoo} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theprestige} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theshining} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

  )
}

export default Mystery