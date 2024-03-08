import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import goodfellas from '../../../../../Assets/ImageSections/Movies/Genres/Crime/goodfellas.jpg'
import knivesout from '../../../../../Assets/ImageSections/Movies/Genres/Crime/knives-out.jpg'
import murderontheorientexpress from '../../../../../Assets/ImageSections/Movies/Genres/Crime/murder-on-the-orient-express.jpg'
import prisoners from '../../../../../Assets/ImageSections/Movies/Genres/Crime/prisoners.jpg'
import scarface from '../../../../../Assets/ImageSections/Movies/Genres/Crime/scarface.jpg'
import seven from '../../../../../Assets/ImageSections/Movies/Genres/Crime/seven.jpg'
import silenceofthelambs from '../../../../../Assets/ImageSections/Movies/Genres/Crime/silence-of-the-lambs.jpg'
import theotherme from '../../../../../Assets/ImageSections/Movies/Genres/Crime/the-other-me.jpg'
import thepaleblueeye from '../../../../../Assets/ImageSections/Movies/Genres/Crime/the-pale-blue-eye.jpg'
import zodiac from '../../../../../Assets/ImageSections/Movies/Genres/Crime/zodiac.jpg'

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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>BIOGRAPHY</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={goodfellas} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={knivesout} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={murderontheorientexpress} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={prisoners} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={scarface} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={seven} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={silenceofthelambs} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theotherme} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thepaleblueeye} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={zodiac} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>

    )
}

export default Crime