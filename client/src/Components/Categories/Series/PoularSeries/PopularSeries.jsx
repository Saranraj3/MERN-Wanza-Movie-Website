import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import breakingbad from '../../../../Assets/ImageSections/Series/Popular/breaking-bad.jpg'
import daredevil from '../../../../Assets/ImageSections/Series/Popular/daredevil.jpg'
import dark from '../../../../Assets/ImageSections/Series/Popular/dark.jpg'
import gameofthrones from '../../../../Assets/ImageSections/Series/Popular/game-of-thrones.jpg'
import lost from '../../../../Assets/ImageSections/Series/Popular/lost.jpg'
import moneyheist from '../../../../Assets/ImageSections/Series/Popular/money-heist.jpg'
import peakyblinders from '../../../../Assets/ImageSections/Series/Popular/peaky-blinders.png'
import strangerthings from '../../../../Assets/ImageSections/Series/Popular/stranger-things.jpg'
import theboys from '../../../../Assets/ImageSections/Series/Popular/the-boys.jpg'
import vikings from '../../../../Assets/ImageSections/Series/Popular/vikings.jpg'

function PopularSeries() {
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
        <div className='overflow-x-hidden overflow-y-hidden'>
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>POPULAR SERIES</h1>
            <Slider {...settings} className='w-[80rem] mt-5 ml-12 '>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={breakingbad} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={daredevil} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={dark} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={gameofthrones} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={lost} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={moneyheist} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={peakyblinders} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={strangerthings} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={theboys} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={vikings} alt="" />
                </div>
            </Slider>
        </div>

    )
}

export default PopularSeries