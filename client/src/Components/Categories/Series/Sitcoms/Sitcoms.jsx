import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rock from '../../../../Assets/ImageSections/Series/Sitcoms/rock.jpg'
import brooklynninenine from '../../../../Assets/ImageSections/Series/Sitcoms/brooklyn-nine-nine.jpg'
import community from '../../../../Assets/ImageSections/Series/Sitcoms/community.jpg'
import friends from '../../../../Assets/ImageSections/Series/Sitcoms/friends.jpg'
import howimetyourmother from '../../../../Assets/ImageSections/Series/Sitcoms/how-i-met-your-mother.jpg'
import modernfamily from '../../../../Assets/ImageSections/Series/Sitcoms/modern-family.jpg'
import seinfeld from '../../../../Assets/ImageSections/Series/Sitcoms/seinfeld.jpg'
import thebigbangtheory from '../../../../Assets/ImageSections/Series/Sitcoms/the-big-bang-theory.jpeg'
import theoffice from '../../../../Assets/ImageSections/Series/Sitcoms/the-office.jpg'
import youngsheldon from '../../../../Assets/ImageSections/Series/Sitcoms/young-sheldon.jpeg'

function Sitcoms() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>SITCOMS</h1>
            <Slider {...settings} className='w-[80rem] mt-5 ml-12 ' >
            <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={brooklynninenine} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={community} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={friends} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={howimetyourmother} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={modernfamily} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={rock} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={seinfeld} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={thebigbangtheory} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={theoffice} alt="" />
                </div>
                <div>
                <img className='ml-3 hover:scale-110 hover:duration-200' src={youngsheldon} alt="" />
                </div>
                </Slider>
            </div>
        
        
    )
}

export default Sitcoms