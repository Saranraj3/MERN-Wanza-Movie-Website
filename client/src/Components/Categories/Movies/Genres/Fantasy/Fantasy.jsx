import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import aladdin from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/aladdin.jpg'
import harrypotter from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/harry-potter1.jpg'
import jackandgiantslayer from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/jack-the-giant-slayer.jpg'
import maleficent from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/maleficent1.jpg'
import mulan from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/mulan.jpg'
import princeofpersia from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/prince-of-persia.jpg'
import sleepyhollow from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/sleepy-hollow.jpg'
import thechroniclesofnarnia from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/the-chronicles-of-narnia1.jpg'
import thegreenknight from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/the-green-knight.jpg'
import warcraft from '../../../../../Assets/ImageSections/Movies/Genres/Fantasy/warcraft.jpg'

function Fantasy() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>FANTASY</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={aladdin} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={harrypotter} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={jackandgiantslayer} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={maleficent} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mulan} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={princeofpersia} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sleepyhollow} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thechroniclesofnarnia} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thegreenknight} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={warcraft} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

  )
}

export default Fantasy