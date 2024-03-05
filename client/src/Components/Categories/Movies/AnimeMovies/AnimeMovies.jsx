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
            <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif'>ANIME MOVIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
                <img src={graveofthefireflies} alt="" />
                <img src={howlscastle} alt="" />
                <img src={myneighbortotoro} alt="" />
                <img src={perfectblue} alt="" />
                <img src={ponyo} alt="" />
                <img src={princessmononoke} alt="" />
                <img src={spiritedaway} alt="" />
                <img src={suzume} alt="" />
                <img src={theboyandtheheron} alt="" />
                <img src={yourname} alt="" />

            </div>
        </div>
    )
}

export default AnimeMovies