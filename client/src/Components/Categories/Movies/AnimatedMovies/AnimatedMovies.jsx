import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cars from '../../../../Assets/ImageSections/Movies/Animated/cars.jpg'
import coco from '../../../../Assets/ImageSections/Movies/Animated/coco.jpg'
import findingdory from '../../../../Assets/ImageSections/Movies/Animated/finding-dory.jpeg'
import moana from '../../../../Assets/ImageSections/Movies/Animated/moana.jpg'
import rayandthelastdragon from '../../../../Assets/ImageSections/Movies/Animated/raya-and-the-last-dragon.jpeg'
import spiderman2 from '../../../../Assets/ImageSections/Movies/Animated/spiderman-across-the-spider-verse.jpg'
import tintin from '../../../../Assets/ImageSections/Movies/Animated/the-adventures-of-tintin.jpg'
import toystory1 from '../../../../Assets/ImageSections/Movies/Animated/toy-story.jpg'
import up from '../../../../Assets/ImageSections/Movies/Animated/up.jpg'
import walle from '../../../../Assets/ImageSections/Movies/Animated/wall-e.jpg'

function AnimatedMovies() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIMATED MOVIES</h1>
            <Slider {...settings} className='w-[80rem] mt-5 ml-12 '>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={cars} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={coco} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={findingdory} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={moana} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={rayandthelastdragon} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={spiderman2} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={tintin} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={toystory1} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={up} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={walle} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default AnimatedMovies