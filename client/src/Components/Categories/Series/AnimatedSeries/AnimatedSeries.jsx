import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arcane from '../../../../Assets/ImageSections/Series/Animated/arcane.jpg'
import avatarthelastairbender from '../../../../Assets/ImageSections/Series/Animated/avatar-the-last-airbender.jpg'
import blueeyesamurai from '../../../../Assets/ImageSections/Series/Animated/blue-eye-samurai.jpg'
import castlevania from '../../../../Assets/ImageSections/Series/Animated/castlevania.jpg'
import invincible from '../../../../Assets/ImageSections/Series/Animated/invincible.jpg'
import lovedeathplusrobots from '../../../../Assets/ImageSections/Series/Animated/love-death-plus-robots.jpg'
import primal from '../../../../Assets/ImageSections/Series/Animated/primal.jpg'
import rickandmorty from '../../../../Assets/ImageSections/Series/Animated/rick-and-morty.jpg'
import scavengers from '../../../../Assets/ImageSections/Series/Animated/scavengers-reign.jpg'
import undone from '../../../../Assets/ImageSections/Series/Animated/undone.jpg'

function AnimatedSeries() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIMATED SERIES</h1>
               <Slider {...settings} className='w-[80rem] mt-5 ml-12 ' >
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={arcane} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={avatarthelastairbender} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={blueeyesamurai} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={castlevania} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={invincible} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={lovedeathplusrobots} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={primal} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={rickandmorty} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={scavengers} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={undone} alt="" />
                </div>
                </Slider>
            </div>
      
    )
}

export default AnimatedSeries