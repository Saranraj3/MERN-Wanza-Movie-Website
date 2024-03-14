import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import alpha from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/alpha.jpg'
import indiana from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/indiana-jones-5.jpg'
import jurassicworld from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/jurassic-world1.png'
import loveandmonster from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/love-and-monsters.jpg'
import piratesofthecaribbean from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/pirates-of-the-caribbean4.jpg'
import riseoftheplanet from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/planet-of-the-apes1.jpeg'
import thecallofthewild from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/the-call-of-the-wild.jpg'
import thelostcityofz from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/the-lost-city-of-z.jpg'
import tomraider from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/tom-raider.jpg'
import uncharted from '../../../../../Assets/ImageSections/Movies/Genres/Adventure/uncharted.jpg'

function Adventure() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ADVENTURE</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={alpha} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={indiana} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={jurassicworld} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={loveandmonster} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={piratesofthecaribbean} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={riseoftheplanet} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thecallofthewild} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thelostcityofz} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={tomraider} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={uncharted} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default Adventure