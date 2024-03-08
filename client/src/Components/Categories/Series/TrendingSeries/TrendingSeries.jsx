import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ashoka from '../../../../Assets/ImageSections/Series/Trending/ashoka.jpg'
import beef from '../../../../Assets/ImageSections/Series/Trending/beef.jpg'
import deadringers from '../../../../Assets/ImageSections/Series/Trending/dead-ringers.jpg'
import fallout from '../../../../Assets/ImageSections/Series/Trending/fallout.jpg'
import fargo from '../../../../Assets/ImageSections/Series/Trending/fargo.png'
import genv from '../../../../Assets/ImageSections/Series/Trending/gen-v.jpg'
import halo from '../../../../Assets/ImageSections/Series/Trending/halo.jpg'
import penguin from '../../../../Assets/ImageSections/Series/Trending/penguin.jpg'
import thesympathize from '../../../../Assets/ImageSections/Series/Trending/the-sympathize.jpg'
import truedetective from '../../../../Assets/ImageSections/Series/Trending/true-detective.jpg'

function TrendingSeries() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>TRENDING SERIES</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={ashoka} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Ahsoka</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={beef} alt="" />
                <p className='ml-[-11.3rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Beef</p>
                <img className='ml-[8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={deadringers} alt="" />
                <p className='ml-[-14.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Dead Ringers</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={fallout} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Fallout</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={fargo} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Fargo</p>
                <img className='ml-[8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={genv} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Gen V</p>
                <img className='ml-[8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={halo} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Halo</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={penguin} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Penguin</p>
                <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thesympathize} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Sympathize</p>
                <img className='ml-[5.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={truedetective} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>True Detective</p>
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default TrendingSeries