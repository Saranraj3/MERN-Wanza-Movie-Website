import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import yearsofslave from '../../../../../Assets/ImageSections/Movies/Genres/Biography/12-years-of-slave.jpg'
import americansniper from '../../../../../Assets/ImageSections/Movies/Genres/Biography/american-sniper.jpg'
import blonde from '../../../../../Assets/ImageSections/Movies/Genres/Biography/blonde.jpg'
import captianphillips from '../../../../../Assets/ImageSections/Movies/Genres/Biography/captian-phillips.jpg'
import catchmeifyoucan from '../../../../../Assets/ImageSections/Movies/Genres/Biography/catch-me-if-you-can.jpg'
import elvis from '../../../../../Assets/ImageSections/Movies/Genres/Biography/elvis.jpg'
import intothewild from '../../../../../Assets/ImageSections/Movies/Genres/Biography/into-the-wild.jpg'
import theimitationgame from '../../../../../Assets/ImageSections/Movies/Genres/Biography/the-imitation-game.jpg'
import thesocialnetwork from '../../../../../Assets/ImageSections/Movies/Genres/Biography/the-social-network.jpg'
import thewolfofwallstreet from '../../../../../Assets/ImageSections/Movies/Genres/Biography/the-wolf-of-wall-street.jpg'

function Biography() {
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
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={yearsofslave} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={americansniper} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={blonde} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={captianphillips} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={catchmeifyoucan} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={elvis} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={intothewild} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theimitationgame} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thesocialnetwork} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thewolfofwallstreet} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

  )
}

export default Biography