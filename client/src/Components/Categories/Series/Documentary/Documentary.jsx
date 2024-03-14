import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import deppvheard from '../../../../Assets/ImageSections/Series/Documentary/depp-vs-heard.jpeg'
import dontfuckwithcats from '../../../../Assets/ImageSections/Series/Documentary/dont-fuck-with-cats.jpg'
import houseofsecrets from '../../../../Assets/ImageSections/Series/Documentary/the-house-of-secrets.jpg'
import humanworldwithin from '../../../../Assets/ImageSections/Series/Documentary/human-the-world-within.jpg'
import indianpredator from '../../../../Assets/ImageSections/Series/Documentary/indian-predator.jpg'
import mumbaimafia from '../../../../Assets/ImageSections/Series/Documentary/mumbai-mafia.jpg'
import prehistoricworld from '../../../../Assets/ImageSections/Series/Documentary/prehistoric-world.jpg'
import returntospace from '../../../../Assets/ImageSections/Series/Documentary/return-to-space.jpg'
import socialdilemma from '../../../../Assets/ImageSections/Series/Documentary/the-social-dilemma.jpeg'
import thehuntforveerappan from '../../../../Assets/ImageSections/Series/Documentary/the-hunt-for-veerappan.jpg'

function Documentary() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>DOCUMENTARY</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className=' flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={deppvheard} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dontfuckwithcats} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={houseofsecrets} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={humanworldwithin} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={indianpredator} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mumbaimafia} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={prehistoricworld} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={returntospace} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={socialdilemma} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thehuntforveerappan} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default Documentary