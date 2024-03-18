import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar2 from '../../../../Assets/ImageSections/Movies/Popular/avatar2.jpeg'
import fightclub from '../../../../Assets/ImageSections/Movies/Popular/fight-club.jpg'
import gladiator from '../../../../Assets/ImageSections/Movies/Popular/gladiator.jpg'
import interstellar from '../../../../Assets/ImageSections/Movies/Popular/interstellar.jpg'
import madmax from '../../../../Assets/ImageSections/Movies/Popular/mad-max-fury-road.jpeg'
import pulpfiction from '../../../../Assets/ImageSections/Movies/Popular/pulp-fiction.jpg'
import terminator from '../../../../Assets/ImageSections/Movies/Popular/the-terminator.jpg'
import thegodfather from '../../../../Assets/ImageSections/Movies/Popular/the-godfather.jpg'
import thelordoftherings from '../../../../Assets/ImageSections/Movies/Popular/the-lord-of-the-rings1.jpeg'
import thematrix from '../../../../Assets/ImageSections/Movies/Popular/the-matrix4.jpg'

function PopularMovies() {
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  }

  return (
    <div className='overflow-x-hidden overflow-y-hidden cursor-pointer'>
      <h1 className='text-white relative cursor-pointer text-2xl mt-16 ml-12 font-serif' >POUPULAR MOVIES</h1>
      <Slider {...settings} className='w-[80rem] mt-5 ml-12 '>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={avatar2} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={fightclub} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={gladiator} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={interstellar} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={madmax} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={pulpfiction} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={terminator} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={thegodfather} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={thelordoftherings} alt="" />
        </div>
        <div>
          <img className='ml-3 hover:scale-110 hover:duration-200' src={thematrix} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default PopularMovies