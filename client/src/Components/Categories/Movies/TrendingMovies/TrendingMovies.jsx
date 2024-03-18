import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import anyonebutyou from '../../../../Assets/ImageSections/Movies/Trending/anyone-but-you.jpg'
import aquaman2 from '../../../../Assets/ImageSections/Movies/Trending/aquaman2.jpg'
import barbie from '../../../../Assets/ImageSections/Movies/Trending/barbie.jpg'
import bobmarley from '../../../../Assets/ImageSections/Movies/Trending/bob-marley-one-love.jpg'
import killersoftheflowermoon from '../../../../Assets/ImageSections/Movies/Trending/killers-of-the-flower-moon.jpg'
import landofbad from '../../../../Assets/ImageSections/Movies/Trending/land-of-bad.jpg'
import napoleon from '../../../../Assets/ImageSections/Movies/Trending/napoleon.png'
import oppenheimer from '../../../../Assets/ImageSections/Movies/Trending/oppenheimer.jpg'
import rebelmoon from '../../../../Assets/ImageSections/Movies/Trending/rebel-moon.jpg'
import silentnight from '../../../../Assets/ImageSections/Movies/Trending/silent-night.jpg'
function TrendingMovies() {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,

  };
  return (
    <div className='overflow-x-hidden overflow-y-hidden cursor-pointer' >
      <h1 className='relative text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>TRENDING MOVIES</h1>
      <Slider {...settings} className='w-[80rem] mt-5 ml-12'>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={anyonebutyou} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={aquaman2} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={barbie} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={bobmarley} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={killersoftheflowermoon} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={landofbad} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={napoleon} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={oppenheimer} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={rebelmoon} alt="" />
        </div>
        <div>
          <img className='ml-3  hover:scale-110 hover:duration-200' src={silentnight} alt="" />
        </div>
      </Slider>
    </div>

  )
}

export default TrendingMovies