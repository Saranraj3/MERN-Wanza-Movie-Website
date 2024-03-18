import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ashoka from '../../../../Assets/ImageSections/Series/Trending/ahsoka.jpg'
import beef from '../../../../Assets/ImageSections/Series/Trending/beef.jpg'
import deadringers from '../../../../Assets/ImageSections/Series/Trending/dead-ringers.jpg'
import fallout from '../../../../Assets/ImageSections/Series/Trending/fallout.jpg'
import fargo from '../../../../Assets/ImageSections/Series/Trending/fargo.jpg'
import genv from '../../../../Assets/ImageSections/Series/Trending/gen-v.jpg'
import halo from '../../../../Assets/ImageSections/Series/Trending/halo.jpg'
import penguin from '../../../../Assets/ImageSections/Series/Trending/the-penguin.jpg'
import thesympathize from '../../../../Assets/ImageSections/Series/Trending/the-sympathasizer.jpg'
import truedetective from '../../../../Assets/ImageSections/Series/Trending/true-detective.jpg'

function TrendingSeries() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>TRENDING SERIES</h1>
            <Slider {...settings} className='w-[80rem] mt-5 ml-12 '>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={ashoka} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={beef} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={deadringers} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={fallout} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={fargo} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={genv} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={halo} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={penguin} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={thesympathize} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={truedetective} alt="" />
                </div>
            </Slider>
        </div>

    )
}

export default TrendingSeries