import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import aspaceodyssey from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/a-space-odyssey.jpg'
import arrival from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/arrival.jpg'
import bladerunner2 from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/blade-runner2.jpg'
import dune1 from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/dune.jpg'
import edgeoftomorrow from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/edge-of-tomorrow.jpg'
import inception from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/inception.jpg'
import minorityreport from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/minority-report.jpg'
import tenet from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/tenet.jpg'
import thecreator from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/the-creator.jpg'
import themartian from '../../../../../Assets/ImageSections/Movies/Genres/Sci-Fi/the-martian.jpg'

function Scifi() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>SCI-FI</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={aspaceodyssey} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={arrival} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={bladerunner2} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dune1} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={edgeoftomorrow} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={inception} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={minorityreport} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={tenet} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thecreator} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={themartian} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>
  )
}

export default Scifi