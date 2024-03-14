import React, { useRef, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import anyonebutyou from '../../../../Assets/ImageSections/Movies/Trending/anyone-but-you.jpg'
import aquaman2 from '../../../../Assets/ImageSections/Movies/Trending/aquaman2.jpg'
import barbie from '../../../../Assets/ImageSections/Movies/Trending/barbie.jpg'
import bobmarley from '../../../../Assets/ImageSections/Movies/Trending/bob-marley-one-love.jpg'
import killersoftheflowermoon from '../../../../Assets/ImageSections/Movies/Trending/killers-of-the-flower-moon.jpg'
import landofbad from '../../../../Assets/ImageSections/Movies/Trending/land-of-bad.jpg'
import napoleon from '../../../../Assets/ImageSections/Movies/Trending/napoleon.png'
import oppenheimer from '../../../../Assets/ImageSections/Movies/Trending/oppenheimer.jpg'
import rebelmoon from '../../../../Assets/ImageSections/Movies/Trending/rebel-moon.png'
import thehungergames5 from '../../../../Assets/ImageSections/Movies/Trending/the-hunger-games5.jpg'
function TrendingMovies() {

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
    <div className='overflow-x-hidden overflow-y-hidden' >
      <h1 className='relative text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>TRENDING MOVIES</h1>
      <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
      <div className=' flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={anyonebutyou} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={aquaman2} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={barbie} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={bobmarley} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={killersoftheflowermoon} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={landofbad} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={napoleon} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={oppenheimer} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rebelmoon} alt="" />
        <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thehungergames5} alt="" />
      </div>
      <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
    </div>
  )
}

export default TrendingMovies