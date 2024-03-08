import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import arcane from '../../../../Assets/ImageSections/Series/Animated/arcane.jpg'
import avatarthelastairbender from '../../../../Assets/ImageSections/Series/Animated/avatar-the-last-airbender.jpg'
import blueeyesamurai from '../../../../Assets/ImageSections/Series/Animated/blue-eye-samurai.png'
import castlevania from '../../../../Assets/ImageSections/Series/Animated/castlevania.jpg'
import invincible from '../../../../Assets/ImageSections/Series/Animated/invincible.jpg'
import lovedeathplusrobots from '../../../../Assets/ImageSections/Series/Animated/love-death-plus-robots.jpg'
import primal from '../../../../Assets/ImageSections/Series/Animated/primal.jpg'
import rickandmorty from '../../../../Assets/ImageSections/Series/Animated/rick-and-morty.jpg'
import scavengers from '../../../../Assets/ImageSections/Series/Animated/scavengers-reign.jpg'
import undone from '../../../../Assets/ImageSections/Series/Animated/undone.jpg'

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
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={arcane} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Arcane</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={avatarthelastairbender} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Avatar The Last Airbender</p>
                <img className='ml-[2.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={blueeyesamurai} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Blue Eye Samurai</p>
                <img className='ml-[5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={castlevania} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Castlevania</p>
                <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={invincible} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Invincible</p>
                <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lovedeathplusrobots} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Love Death + Robots</p>
                <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={primal} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Primal</p>
                <img className='ml-[7.8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rickandmorty} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Rick And Morty</p>
                <img className='ml-[5.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={scavengers} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Scavengers</p>
                <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={undone} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Undone</p>
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimatedSeries