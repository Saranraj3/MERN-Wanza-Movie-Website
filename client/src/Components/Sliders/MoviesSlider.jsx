import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dungenons from '../../Assets/ImageSlider/Movies/dungeons-dragons.jpeg'
import godzila from '../../Assets/ImageSlider/Movies/godzilla-vs-kong.jpg'
import maydecember from '../../Assets/ImageSlider/Movies/the-unbearable-weight-of-massive-talent.jpeg'
import operation from '../../Assets/ImageSlider/Movies/day-shift.jpg'
import thekiller from '../../Assets/ImageSlider/Movies/the-killer.jpeg'


function MoviesSlider() {
    const settings = {
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };
  return (
    <div className='overflow-x-hidden overflow-y-hidden '>
        <Slider {...settings} className=' overflow-x-hidden overflow-y-hidden  h-[32rem]'>
        <div>
            <img src={dungenons} alt="" />
        </div>
        <div>
            <img src={godzila} alt="" />
        </div>
        <div>
            <img src={maydecember} alt="" />
        </div>
        <div>
            <img src={operation} alt="" />
        </div>
        <div>
            <img src={thekiller} alt="" />
        </div>
        </Slider>
    </div>
  )
}

export default MoviesSlider