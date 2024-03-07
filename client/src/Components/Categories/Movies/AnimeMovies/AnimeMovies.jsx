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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIME MOVIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={graveofthefireflies} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Grave Of The Fire Flies</p>
                <img className='ml-[4rem] rounded-md hover:scale-125 hover:duration-300' src={howlscastle} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Howl's Moving Castle</p>
                <img className='ml-[4rem] rounded-md hover:scale-125 hover:duration-300' src={myneighbortotoro} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>My Neighbor Totoro</p>
                <img className='ml-[4.5rem] rounded-md hover:scale-125 hover:duration-300' src={perfectblue} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Perfect Blue</p>
                <img className='ml-[5.8rem] rounded-md hover:scale-125 hover:duration-300' src={ponyo} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Ponyo</p>
                <img className='ml-[8rem] rounded-md hover:scale-125 hover:duration-300' src={princessmononoke} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Princess Mononoke</p>
                <img className='ml-[4rem] rounded-md hover:scale-125 hover:duration-300' src={spiritedaway} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Spirited Away</p>
                <img className='ml-[5.5rem] rounded-md hover:scale-125 hover:duration-300' src={suzume} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Suzume</p>
                <img className='ml-[7rem] rounded-md hover:scale-125 hover:duration-300' src={theboyandtheheron} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Boy And The Heron</p>
                <img className='ml-[2.6rem] rounded-md hover:scale-125 hover:duration-300' src={yourname} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Your Name</p>
            </div>
        </div>
    )
}

export default AnimeMovies