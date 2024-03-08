import React, { useRef, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import anyonebutyou from '../../../../Assets/ImageSections/Movies/Trending/anyone-but-you.jpg'
import aquaman2 from '../../../../Assets/ImageSections/Movies/Trending/aquaman-2.jpg'
import barbie from '../../../../Assets/ImageSections/Movies/Trending/barbie.jpg'
import bobmarley from '../../../../Assets/ImageSections/Movies/Trending/bob-marley-one-love.jpg'
import killersoftheflowermoon from '../../../../Assets/ImageSections/Movies/Trending/killers-of-the-flower-moon.jpg'
import landofbad from '../../../../Assets/ImageSections/Movies/Trending/land-of-bad.jpg'
import napoleon from '../../../../Assets/ImageSections/Movies/Trending/napoleon.jpg'
import oppenheimer from '../../../../Assets/ImageSections/Movies/Trending/oppenheimer.jpg'
import rebelmoon from '../../../../Assets/ImageSections/Movies/Trending/rebel-moon.jpg'
import thehungergames5 from '../../../../Assets/ImageSections/Movies/Trending/the-hunger-games-5.jpg'
function TrendingMovies() {
  
  const [slider, setSlider] = useState(0)
  const [arrow, setArrow] = useState(false)


  const listRef = useRef()

  const handleClick = (direction) => {
    setArrow(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slider>0) {
      setSlider(slider -1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === 'right' && slider<8) {
      setSlider(slider+1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <div className='overflow-x-hidden overflow-y-hidden' >
      <h1 className='relative text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>TRENDING MOVIES</h1>
      <p style={{display:!arrow &&'none'}} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
      <div className=' flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={anyonebutyou} alt="" />
        <p className='text-nowrap mt-[10.5rem] ml-[-14rem] text-white font-semibold'>Anyone But You</p>
        <img className='ml-[5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={aquaman2} alt="" />
        <p className='text-nowrap ml-[-17rem] mt-[10.5rem] text-white font-semibold'>Aquaman and the lost kingdom</p>
        <img className='ml-[1rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={barbie} alt="" />
        <p className='mt-[10.5rem] ml-[-12rem] text-white font-semibold' >Barbie</p>
        <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={bobmarley} alt="" />
        <p className='mt-[10.5rem] ml-[-15rem] text-nowrap text-white font-semibold' >Bob Marley One Love</p>
        <img className='ml-[3.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={killersoftheflowermoon} alt="" />
        <p className='ml-[-16.3rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Killers Of The Flower Moon</p>
        <img className='ml-[2rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={landofbad} alt="" />
        <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Land Of Bad</p>
        <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={napoleon} alt="" />
        <p className='ml-[-12.5rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Napolean</p>
        <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={oppenheimer} alt="" />
        <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Oppenheimer</p>
        <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rebelmoon} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Rebel Moon</p>
        <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thehungergames5} alt="" />
        <p className='ml-[-18rem] mt-[10.5rem] text-nowrap text-white font-semibold' >The Hunger Games The Ballad Of <br /> Songbirds Snakes</p>
      </div>
      <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
    </div>
  )
}

export default TrendingMovies