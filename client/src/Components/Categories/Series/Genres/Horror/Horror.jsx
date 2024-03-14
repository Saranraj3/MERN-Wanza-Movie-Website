import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import americanhorrorstories from '../../../../../Assets/ImageSections/Series/Genres/Horror/american-horror-stories.jpg'
import cabinetofcuriousities from '../../../../../Assets/ImageSections/Series/Genres/Horror/cabinet-of-curiosities.jpg'
import hannibal from '../../../../../Assets/ImageSections/Series/Genres/Horror/hannibal.jpg'
import marianne from '../../../../../Assets/ImageSections/Series/Genres/Horror/marianne.jpg'
import midnightmass from '../../../../../Assets/ImageSections/Series/Genres/Horror/midnight-mass.jpg'
import pennydreadful from '../../../../../Assets/ImageSections/Series/Genres/Horror/penny-dreadful.jpg'
import ratched from '../../../../../Assets/ImageSections/Series/Genres/Horror/ratched.jpg'
import supernatural from '../../../../../Assets/ImageSections/Series/Genres/Horror/supernatural.jpg'
import thefallofthehouseofusher from '../../../../../Assets/ImageSections/Series/Genres/Horror/the-fall-of-the-house-of-usher.jpg'
import thehauntingofhillhouse from '../../../../../Assets/ImageSections/Series/Genres/Horror/the-huanting-of-hill-house.jpg'

function Horror() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>HORROR</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={americanhorrorstories} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={cabinetofcuriousities} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={hannibal} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={marianne} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={midnightmass} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={pennydreadful} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={ratched} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={supernatural} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thefallofthehouseofusher} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thehauntingofhillhouse} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default Horror