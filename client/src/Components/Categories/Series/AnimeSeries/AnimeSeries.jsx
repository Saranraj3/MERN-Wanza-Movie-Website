import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import attackontitan from '../../../../Assets/ImageSections/Series/Anime/attack-on-titan.jpg'
import chainsawman from '../../../../Assets/ImageSections/Series/Anime/chainsaw-man.jpg'
import cowboybebop from '../../../../Assets/ImageSections/Series/Anime/cowboy-bebop.jpg'
import cyberpunk from '../../../../Assets/ImageSections/Series/Anime/cyberpunk-edgerunners.jpg'
import deathnote from '../../../../Assets/ImageSections/Series/Anime/death-note.jpg'
import demonslayer from '../../../../Assets/ImageSections/Series/Anime/demon-slayer.jpg'
import jujutsukaisen from '../../../../Assets/ImageSections/Series/Anime/jujutsu-kaisen.jpg'
import onepiece from '../../../../Assets/ImageSections/Series/Anime/one-piece.jpg'
import parasyte from '../../../../Assets/ImageSections/Series/Anime/parasyte.jpg'
import vinlandsaga from '../../../../Assets/ImageSections/Series/Anime/vinland-saga.jpg'

function AnimeSeries() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIME SERIES</h1>
            <Slider {...settings} className='w-[80rem] mt-5 ml-12 ' >
            <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={attackontitan} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={chainsawman} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={cowboybebop} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={cyberpunk} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={deathnote} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={demonslayer} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={jujutsukaisen} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={onepiece} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={parasyte} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={vinlandsaga} alt="" />
                </div>
                </Slider>
            </div>
         
    )
}

export default AnimeSeries