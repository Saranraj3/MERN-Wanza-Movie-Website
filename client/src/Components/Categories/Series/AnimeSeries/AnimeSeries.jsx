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
import parasyte from '../../../../Assets/ImageSections/Series/Anime/parasyte.png'
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
        if (direction === 'right' && slider < 6) {
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
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Attack On Titan</p>
                <img className='ml-[3.2rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={chainsawman} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Chainsaw Man</p>
                <img className='ml-[5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={cowboybebop} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Cowboy Bebop</p>
                <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={cyberpunk} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Cyberpunk Edgerunners</p>
                <img className='ml-[3.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={deathnote} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Death Note</p>
                <img className='ml-[5.4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={demonslayer} alt="" />
                <p className='ml-[-11.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Demon Slayer</p>
                <img className='ml-[3.6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={jujutsukaisen} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Jujutsu Kaisen</p>
                <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={onepiece} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>One Piece</p>
                <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={parasyte} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Parasyte</p>
                <img className='ml-[8.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={vinlandsaga} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Vinland Saga</p>
            </div>
            <p className=' cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimeSeries