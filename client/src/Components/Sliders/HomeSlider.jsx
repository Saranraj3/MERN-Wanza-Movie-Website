import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import argylle from '../../Assets/ImageSlider/Home/argylle.jpeg'
import madameweb from '../../Assets/ImageSlider/Home/madame-web.jpg'
import poorthings from '../../Assets/ImageSlider/Home/poor-things.jpg'
import wonka from '../../Assets/ImageSlider/Home/wonka.jpg'

function HomeSlider() {
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
            <img src={argylle} alt="" />
        </div>
        <div>
            <img src={madameweb} alt="" />
        </div>
        <div>
            <img src={poorthings} alt="" />
        </div>
        <div>
            <img src={wonka} alt="" />
        </div>
        </Slider>
    </div>
  )
}

export default HomeSlider