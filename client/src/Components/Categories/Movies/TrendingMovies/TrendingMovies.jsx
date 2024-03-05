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
    <div>
        <h1 className='cursor-pointer text-2xl mt-5 ml-5 font-serif'>TRENDING MOVIES</h1>
        <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
            <img src={anyonebutyou} alt="" />
            <img src={aquaman2} alt="" />
            <img src={barbie} alt="" />
            <img src={bobmarley} alt="" />
            <img src={killersoftheflowermoon} alt="" />
            <img src={landofbad} alt="" />
            <img src={napoleon} alt="" />
            <img src={oppenheimer} alt="" />
            <img src={rebelmoon} alt="" />
            <img src={thehungergames5} alt="" />

        </div>
    </div>
  )
}

export default TrendingMovies