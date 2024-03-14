import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import arcane from '../../../../Assets/ImageSections/Series/Animated/arcane.jpg'
import avatarthelastairbender from '../../../../Assets/ImageSections/Series/Animated/avatar-the-last-airbender.jpg'
import blueeyesamurai from '../../../../Assets/ImageSections/Series/Animated/blue-eye-samurai.jpg'
import castlevania from '../../../../Assets/ImageSections/Series/Animated/castlevania.jpg'
import invincible from '../../../../Assets/ImageSections/Series/Animated/invincible.jpg'
import lovedeathplusrobots from '../../../../Assets/ImageSections/Series/Animated/love-death-plus-robots.jpg'
import primal from '../../../../Assets/ImageSections/Series/Animated/primal.jpg'
import rickandmorty from '../../../../Assets/ImageSections/Series/Animated/rick-and-morty.jpg'
import scavengers from '../../../../Assets/ImageSections/Series/Animated/scavengers-reign.jpg'
import undone from '../../../../Assets/ImageSections/Series/Animated/undone.jpeg'

function AnimatedSeries() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIMATED SERIES</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={arcane} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={avatarthelastairbender} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={blueeyesamurai} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={castlevania} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={invincible} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lovedeathplusrobots} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={primal} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rickandmorty} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={scavengers} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={undone} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimatedSeries