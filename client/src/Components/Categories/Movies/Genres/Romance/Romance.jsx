import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import abouttime from '../../../../../Assets/ImageSections/Movies/Genres/Romance/about-time.jpg'
import beforesunrise from '../../../../../Assets/ImageSections/Movies/Genres/Romance/before-sunrise.jpg'
import enternalsunshine from '../../../../../Assets/ImageSections/Movies/Genres/Romance/enternal-sunshine.jpg'
import firstdate from '../../../../../Assets/ImageSections/Movies/Genres/Romance/first-date.jpg'
import friendswithbenefits from '../../../../../Assets/ImageSections/Movies/Genres/Romance/friends-with-benefits.jpg'
import lalaland from '../../../../../Assets/ImageSections/Movies/Genres/Romance/la-la-land.jpg'
import mebeforeyou from '../../../../../Assets/ImageSections/Movies/Genres/Romance/me-before-you.jpg'
import theproposal from '../../../../../Assets/ImageSections/Movies/Genres/Romance/the-proposal.jpg'
import theuglytruth from '../../../../../Assets/ImageSections/Movies/Genres/Romance/the-ugly-truth.jpg'
import titanic from '../../../../../Assets/ImageSections/Movies/Genres/Romance/titanic.jpg'

function Romance() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ROMANCE</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={abouttime} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={beforesunrise} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={enternalsunshine} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={firstdate} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={friendswithbenefits} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lalaland} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mebeforeyou} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theproposal} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theuglytruth} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={titanic} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

  )
}

export default Romance