import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
    const [slider, setSlider] = useState(0)
    const [arrow, setArrow] = useState(false)

    const listRef = useRef()

    const handleClick = (direction) => {
        setArrow(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === 'left' && slider > 0) {
            setSlider(slider - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === 'right' && slider < 8) {
            setSlider(slider + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIME MOVIES</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className=' flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={graveofthefireflies} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={howlscastle} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thegardenofwords} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={perfectblue} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={ponyo} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={princessmononoke} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={spiritedaway} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={suzume} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theboyandtheheron} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={yourname} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimeMovies