import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import jumpstreet from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/21-jump-street.jpg'
import yearoldvirgin from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/40-year-old-virgin.jpg'
import anchorman from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/anchorman-the-legend-of-ron-burgundy.jpg'
import brucealmighty from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/bruce-almighty.jpg'
import mrbean from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/mr-bean-holiday.jpg'
import stuber from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/stuber.jpg'
import thedictator from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/the-dictator.jpg'
import thehangover from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/the-hangover-1.jpg'
import themask from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/the-mask.jpg'
import weremillers from '../../../../../Assets/ImageSections/Movies/Genres/Comedy/were-the-millers.jpg'

function Comedy() {
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
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={jumpstreet} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={yearoldvirgin} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={anchorman} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={brucealmighty} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mrbean} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={stuber} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thedictator} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thehangover} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={themask} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={weremillers} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>
 
  )
}

export default Comedy