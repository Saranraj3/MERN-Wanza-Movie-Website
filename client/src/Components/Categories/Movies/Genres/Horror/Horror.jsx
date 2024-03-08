import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import annabelle from '../../../../../Assets/ImageSections/Movies/Genres/Horror/annabelle.jpg'
import evildeadrise from '../../../../../Assets/ImageSections/Movies/Genres/Horror/evil-dead-rise-5.jpg'
import getout from '../../../../../Assets/ImageSections/Movies/Genres/Horror/get-out.jpg'
import herditary from '../../../../../Assets/ImageSections/Movies/Genres/Horror/hereditary.jpg'
import midsomar from '../../../../../Assets/ImageSections/Movies/Genres/Horror/midsommar.jpg'
import petsematary from '../../../../../Assets/ImageSections/Movies/Genres/Horror/petsematary.jpg'
import theconjuring from '../../../../../Assets/ImageSections/Movies/Genres/Horror/the-conjuring-1.jpg'
import theexorcist from '../../../../../Assets/ImageSections/Movies/Genres/Horror/the-exorcist-1.jpg'
import thenun from '../../../../../Assets/ImageSections/Movies/Genres/Horror/the-nun-1.jpg'
import thepopesexorcist from '../../../../../Assets/ImageSections/Movies/Genres/Horror/the-popes-exorcist.jpg'

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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>FANTASY</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={annabelle} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={evildeadrise} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={getout} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={herditary} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={midsomar} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={petsematary} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theconjuring} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theexorcist} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thenun} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thepopesexorcist} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>
  )
}

export default Horror