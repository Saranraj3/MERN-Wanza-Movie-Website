import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import attackontitan from '../../../../Assets/ImageSections/Series/Anime/attack-on-titan.jpg'
import chainsawman from '../../../../Assets/ImageSections/Series/Anime/chainsaw-man.jpg'
import cowboybebop from '../../../../Assets/ImageSections/Series/Anime/cowboy-bebop.jpg'
import cyberpunk from '../../../../Assets/ImageSections/Series/Anime/cyberpunk-edgerunners.jpg'
import deathnote from '../../../../Assets/ImageSections/Series/Anime/death-note.jpg'
import demonslayer from '../../../../Assets/ImageSections/Series/Anime/demon-slayer.jpg'
import jujutsukaisen from '../../../../Assets/ImageSections/Series/Anime/jujutsu-kaisen.jpg'
import onepiece from '../../../../Assets/ImageSections/Series/Anime/one-piece.jpg'
import parasyte from '../../../../Assets/ImageSections/Series/Anime/parasyte.jpg'
import vinlandsaga from '../../../../Assets/ImageSections/Series/Anime/vinland-saga.jpg'

function AnimeSeries() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIME SERIES</h1>
            <p style={{ display: !arrow && 'none' }} className=' z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={attackontitan} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={chainsawman} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={cowboybebop} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={cyberpunk} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={deathnote} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={demonslayer} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={jujutsukaisen} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={onepiece} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={parasyte} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={vinlandsaga} alt="" />
            </div>
            <p className=' cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimeSeries