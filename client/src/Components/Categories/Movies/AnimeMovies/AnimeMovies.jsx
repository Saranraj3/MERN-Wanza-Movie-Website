import React from 'react'
import graveofthefireflies from '../../../../Assets/ImageSections/Movies/Anime/grave-of-the-fireflies.jpg'
import howlscastle from '../../../../Assets/ImageSections/Movies/Anime/howls-castle.jpg'
import myneighbortotoro from '../../../../Assets/ImageSections/Movies/Anime/my-neighbor-totoro.jpg'
import perfectblue from '../../../../Assets/ImageSections/Movies/Anime/perfect-blue.jpg'
import ponyo from '../../../../Assets/ImageSections/Movies/Anime/ponyo.jpg'
import princessmononoke from '../../../../Assets/ImageSections/Movies/Anime/princess-mononoke.jpg'
import spiritedaway from '../../../../Assets/ImageSections/Movies/Anime/spirited-away.jpg'
import suzume from '../../../../Assets/ImageSections/Movies/Anime/suzume.jpg'
import theboyandtheheron from '../../../../Assets/ImageSections/Movies/Anime/the-boy-and-the-heron.jpg'
import yourname from '../../../../Assets/ImageSections/Movies/Anime/your-name.jpg'

function AnimeMovies() {

    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>ANIME MOVIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={graveofthefireflies} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={howlscastle} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={myneighbortotoro} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={perfectblue} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={ponyo} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={princessmononoke} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={spiritedaway} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={suzume} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={theboyandtheheron} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={yourname} alt="" />

            </div>
        </div>
    )
}

export default AnimeMovies