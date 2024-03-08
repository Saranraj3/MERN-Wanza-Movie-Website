import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import deppvheard from '../../../../Assets/ImageSections/Series/Documentary/depp-v-heard.jpg'
import dontfuckwithcats from '../../../../Assets/ImageSections/Series/Documentary/dont-fuck-with-cats.jpg'
import houseofsecrets from '../../../../Assets/ImageSections/Series/Documentary/house-of-secrets-the-burari-deaths.jpg'
import humanworldwithin from '../../../../Assets/ImageSections/Series/Documentary/human-world-within.jpg'
import indianpredator from '../../../../Assets/ImageSections/Series/Documentary/indian-predator.jpg'
import mumbaimafia from '../../../../Assets/ImageSections/Series/Documentary/mumbai-mafia-police-vs-underworld.jpg'
import prehistoricworld from '../../../../Assets/ImageSections/Series/Documentary/prehistoric-world.jpg'
import returntospace from '../../../../Assets/ImageSections/Series/Documentary/return-to-space.jpg'
import socialdilemma from '../../../../Assets/ImageSections/Series/Documentary/social-dilemma.jpg'
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
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Depp v Heard</p>
                <img className='ml-[5.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dontfuckwithcats} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Don't F**k With Cats</p>
                <img className='ml-[3rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={houseofsecrets} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>House Of Secrets</p>
                <img className='ml-[4.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={humanworldwithin} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Human World Within</p>
                <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={indianpredator} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Indian Predator</p>
                <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mumbaimafia} alt="" />
                <p className='ml-[-20rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Mumbai Mafia Police VS Underworld</p>
                <img className='ml-[rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={prehistoricworld} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Prehistoric World</p>
                <img className='ml-[4.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={returntospace} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Return To Space</p>
                <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={socialdilemma} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Social Dilemma</p>
                <img className='ml-[3.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thehuntforveerappan} alt="" />
                <p className='ml-[-15.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Hunt For Veerappan</p>
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default Documentary