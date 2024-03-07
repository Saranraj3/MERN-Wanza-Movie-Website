import React from 'react'
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
  return (
    <div >
      <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>TRENDING MOVIES</h1>
      <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
        <img className='rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={anyonebutyou} alt="" />
        <p className='text-nowrap mt-[10.5rem] ml-[-14rem] text-white font-semibold'>Anyone But You</p>
        <img className='ml-[5rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={aquaman2} alt="" />
        <p className='text-nowrap ml-[-17rem] mt-[10.5rem] text-white font-semibold'>Aquaman and the lost kingdom</p>
        <img className='ml-[1rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={barbie} alt="" />
        <p className='mt-[10.5rem] ml-[-12rem] text-white font-semibold' >Barbie</p>
        <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={bobmarley} alt="" />
        <p className='mt-[10.5rem] ml-[-15rem] text-nowrap text-white font-semibold' >Bob Marley One Love</p>
        <img className='ml-[3.5rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={killersoftheflowermoon} alt="" />
        <p className='ml-[-16.3rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Killers Of The Flower Moon</p>
        <img className='ml-[2rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={landofbad} alt="" />
        <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Land Of Bad</p>
        <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={napoleon} alt="" />
        <p className='ml-[-12.5rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Napolean</p>
        <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={oppenheimer} alt="" />
        <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Oppenheimer</p>
        <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={rebelmoon} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold' >Rebel Moon</p>
        <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-125 hover:duration-300' src={thehungergames5} alt="" />
        <p className='ml-[-18rem] mt-[10.5rem] text-nowrap text-white font-semibold' >The Hunger Games The Ballad Of <br /> Songbirds Snakes</p>
      </div>
    </div>
  )
}

export default TrendingMovies