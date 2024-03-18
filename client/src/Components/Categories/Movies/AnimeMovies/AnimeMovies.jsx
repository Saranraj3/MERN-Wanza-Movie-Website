import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import howlscastle from '../../../../Assets/ImageSections/Movies/Anime/howls-moving-castle.jpg'
import perfectblue from '../../../../Assets/ImageSections/Movies/Anime/perfect-blue.jpg'
import ponyo from '../../../../Assets/ImageSections/Movies/Anime/ponyo.jpg'
import spiritedaway from '../../../../Assets/ImageSections/Movies/Anime/spirited-away.jpg'
import suzume from '../../../../Assets/ImageSections/Movies/Anime/suzume.jpg'
import theboyandtheheron from '../../../../Assets/ImageSections/Movies/Anime/the-boy-and-the-heron.jpg'
import thegardenofwords from '../../../../Assets/ImageSections/Movies/Anime/the-garden-of-words.jpg'
import graveofthefireflies from '../../../../Assets/ImageSections/Movies/Anime/the-grave-of-the-fireflies.jpg'
import princessmononoke from '../../../../Assets/ImageSections/Movies/Anime/the-secret-world-of-arrietty.jpg'
import yourname from '../../../../Assets/ImageSections/Movies/Anime/your-name.jpg'

function AnimeMovies() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIME MOVIES</h1>
            <Slider {...settings} className='w-[80rem] mt-5 ml-12 '>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={graveofthefireflies} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={howlscastle} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={thegardenofwords} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={perfectblue} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={ponyo} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={princessmononoke} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={spiritedaway} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={suzume} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={theboyandtheheron} alt="" />
                </div>
                <div>
                    <img className='ml-3 hover:scale-110 hover:duration-200' src={yourname} alt="" />
                </div>
            </Slider>
        </div>

    )
}

export default AnimeMovies