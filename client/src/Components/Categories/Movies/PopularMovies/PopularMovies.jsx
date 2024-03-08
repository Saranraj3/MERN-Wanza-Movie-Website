import React, { useRef, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import avatar1 from '../../../../Assets/ImageSections/Movies/Popular/avatar-1.jpg'
import fightclub from '../../../../Assets/ImageSections/Movies/Popular/fight-club.png'
import gladiator from '../../../../Assets/ImageSections/Movies/Popular/gladiator.jpg'
import interstellar from '../../../../Assets/ImageSections/Movies/Popular/interstellar.jpg'
import madmax from '../../../../Assets/ImageSections/Movies/Popular/mad-max-fury-road.jpg'
import pulpfiction from '../../../../Assets/ImageSections/Movies/Popular/pulp-fiction.jpg'
import terminator from '../../../../Assets/ImageSections/Movies/Popular/terminator.jpg'
import thegodfather from '../../../../Assets/ImageSections/Movies/Popular/the-godfather.jpg'
import thelordoftherings from '../../../../Assets/ImageSections/Movies/Popular/the-lord-of-the-rings.jpg'
import thematrix from '../../../../Assets/ImageSections/Movies/Popular/the-matrix.jpg'

function PopularMovies() {
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
      <h1 className='text-white relative cursor-pointer text-2xl mt-16 ml-12 font-serif' >POUPULAR MOVIES</h1>
      <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
      <div className=' flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef} >
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={avatar1} alt="" />
        <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Avatar</p>
        <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={fightclub} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Fight Club</p>
        <img className='ml-[6.8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={gladiator} alt="" />
        <p className='ml-[-12.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Gladiator</p>
        <img className='ml-[6.8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={interstellar} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Interstellar</p>
        <img className='ml-[6.2rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={madmax} alt="" />
        <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Mad Max Fury Road</p>
        <img className='ml-[3.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={pulpfiction} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Pulp Fiction</p>
        <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={terminator} alt="" />
        <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Terminator</p>
        <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thegodfather} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Godfather</p>
        <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thelordoftherings} alt="" />
        <p className='ml-[-16.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Lord Of The Rings The <br /> Fellowship Of The Ring</p>
        <img className='ml-[3rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thematrix} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold' >The Matrix</p>
      </div>
      <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
    </div>
  )
}

export default PopularMovies