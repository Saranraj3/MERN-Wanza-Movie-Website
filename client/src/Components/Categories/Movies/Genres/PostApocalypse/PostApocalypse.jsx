import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import twothousandtelwe from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/2012.jpg'
import aquietplace from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/a-quiet-place1.jpg'
import dayslater from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/days-later.jpg'
import doomsday from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/doomsday.jpg'
import iamlegend from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/i-am-legend.jpg'
import residentevil from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/resident-evil5.jpg'
import sanandreas from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/san-andreas.jpg'
import thebookofeli from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/the-book-of-eli.jpg'
import theroad from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/the-road.jpg'
import worldwarz from '../../../../../Assets/ImageSections/Movies/Genres/PostApocalypse/world-war-z.jpg'

function PostApocalypse() {
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
      <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>POST APOCALYPSE</h1>
      <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
      <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={twothousandtelwe} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={aquietplace} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dayslater} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={doomsday} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={iamlegend} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={residentevil} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sanandreas} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thebookofeli} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theroad} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={worldwarz} alt="" />
      </div>
      <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
    </div>

  )
}

export default PostApocalypse