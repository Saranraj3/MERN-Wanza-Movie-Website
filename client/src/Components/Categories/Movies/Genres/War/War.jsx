import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ninetyseventy from '../../../../../Assets/ImageSections/Movies/Genres/War/1917.jpg'
import allquietonthewestern from '../../../../../Assets/ImageSections/Movies/Genres/War/all-quiet-on-the-western.jpeg'
import dunkirk from '../../../../../Assets/ImageSections/Movies/Genres/War/dunkirk.jpg'
import fury from '../../../../../Assets/ImageSections/Movies/Genres/War/fury.jpg'
import greyhound from '../../../../../Assets/ImageSections/Movies/Genres/War/greyhound.jpg'
import inglouriousbastard from '../../../../../Assets/ImageSections/Movies/Genres/War/hacksaw-ridge.jpg'
import hacksawridge from '../../../../../Assets/ImageSections/Movies/Genres/War/inglourious-bastard.jpg'
import savingprivateryan from '../../../../../Assets/ImageSections/Movies/Genres/War/saving-private-ryan.jpg'
import thecovenant from '../../../../../Assets/ImageSections/Movies/Genres/War/the-covenant.jpg'
import thehurtlocker from '../../../../../Assets/ImageSections/Movies/Genres/War/the-hurt-locker.jpeg'

  function War() {
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
        <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>WAR</h1>
        <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
        <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={ninetyseventy} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={allquietonthewestern} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dunkirk} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={fury} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={greyhound} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={hacksawridge} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={inglouriousbastard} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={savingprivateryan} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thecovenant} alt="" />
          <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thehurtlocker} alt="" />
        </div>
        <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
      </div>
    )
  }

export default War