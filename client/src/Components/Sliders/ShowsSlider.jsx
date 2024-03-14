import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatarliveaction from '../../Assets/ImageSlider/Shows/avatar-the-last-airbender.jpg'
import mastersoftheair from '../../Assets/ImageSlider/Shows/masters-of-the-air.jpg'
import mranmrssmith from '../../Assets/ImageSlider/Shows/mr-and-mrs-smith.jpg'
import percyjackson from '../../Assets/ImageSlider/Shows/percy-jackson-and-the-olympians-percy.jpg'
import shogun from '../../Assets/ImageSlider/Shows/shogun.jpg'

function ShowsSlider() {
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
        <img src={avatarliveaction} alt="" />
    </div>
    <div>
        <img src={mastersoftheair} alt="" />
    </div>
    <div>
        <img src={mranmrssmith} alt="" />
    </div>
    <div>
        <img src={percyjackson} alt="" />
    </div>
    <div>
        <img src={shogun} alt="" />
    </div>
   
    </Slider>
</div>
  )
}

export default ShowsSlider