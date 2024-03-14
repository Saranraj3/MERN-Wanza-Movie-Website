import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import colony from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/colony.jpg'
import twelvemonkeys from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/monkeys.jpg'
import raisedbywolves from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/raised-by-wolves.jpg'
import silo from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/silo.jpg'
import stationeleven from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/station-eleven.jpg'
import thelastofus from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/the-last-of-us.jpg'
import thelastship from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/the-last-ship.jpg'
import therain from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/the-rain.jpg'
import thewalkingdead from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/the-walking-dead.jpeg'
import vanhelsing from '../../../../../Assets/ImageSections/Series/Genres/PostApocalypse/vanhelsing.jpg'

function PostApocalypse() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>POST APOCALYPSE</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={colony} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={twelvemonkeys} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={raisedbywolves} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={silo} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={stationeleven} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thelastofus} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thelastship} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={therain} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thewalkingdead} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={vanhelsing} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>

    )
}

export default PostApocalypse