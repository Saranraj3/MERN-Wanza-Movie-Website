import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import aliceinborderland from '../../../../../Assets/ImageSections/Series/Genres/Action/alice-in-borderland.jpg'
import banshee from '../../../../../Assets/ImageSections/Series/Genres/Action/banshee.jpg'
import citadel from '../../../../../Assets/ImageSections/Series/Genres/Action/citadel.jpg'
import gangsoflondon from '../../../../../Assets/ImageSections/Series/Genres/Action/gangs-of-london.jpg'
import jackryan from '../../../../../Assets/ImageSections/Series/Genres/Action/jack-ryan.jpg'
import reacher from '../../../../../Assets/ImageSections/Series/Genres/Action/reacher.jpg'
import themandalorian from '../../../../../Assets/ImageSections/Series/Genres/Action/the-mandalorian.jpg'
import thenightagent from '../../../../../Assets/ImageSections/Series/Genres/Action/the-night-agent.jpg'
import warrior from '../../../../../Assets/ImageSections/Series/Genres/Action/warrior.jpg'
import wuassassin from '../../../../../Assets/ImageSections/Series/Genres/Action/wu-assassin.jpg'

function Action() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ACTION</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={aliceinborderland} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={banshee} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={citadel} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={gangsoflondon} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={jackryan} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={reacher} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={themandalorian} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thenightagent} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={warrior} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={wuassassin} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>

    )
}

export default Action