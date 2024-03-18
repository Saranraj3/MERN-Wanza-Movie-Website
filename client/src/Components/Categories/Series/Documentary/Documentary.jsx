import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import deppvheard from '../../../../Assets/ImageSections/Series/Documentary/depp-vs-heard.jpeg'
import dontfuckwithcats from '../../../../Assets/ImageSections/Series/Documentary/dont-fuck-with-cats.jpg'
import houseofsecrets from '../../../../Assets/ImageSections/Series/Documentary/the-house-of-secrets.jpg'
import humanworldwithin from '../../../../Assets/ImageSections/Series/Documentary/human-the-world-within.jpg'
import indianpredator from '../../../../Assets/ImageSections/Series/Documentary/indian-predator.jpg'
import mumbaimafia from '../../../../Assets/ImageSections/Series/Documentary/mumbai-mafia.jpg'
import prehistoricworld from '../../../../Assets/ImageSections/Series/Documentary/prehistoric-world.jpeg'
import returntospace from '../../../../Assets/ImageSections/Series/Documentary/return-to-space.jpg'
import socialdilemma from '../../../../Assets/ImageSections/Series/Documentary/the-social-dilemma.jpg'
import thehuntforveerappan from '../../../../Assets/ImageSections/Series/Documentary/the-hunt-for-veerappan.jpg'

function Documentary() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>DOCUMENTARY</h1>
            <Slider {...settings} className='w-[80rem] mt-5 ml-12 ' >
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={deppvheard} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={dontfuckwithcats} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={humanworldwithin} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={indianpredator} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={mumbaimafia} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={prehistoricworld} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={returntospace} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={houseofsecrets} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={thehuntforveerappan} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={socialdilemma} alt="" />
                </div>
            </Slider> </div>
    )
}

export default Documentary