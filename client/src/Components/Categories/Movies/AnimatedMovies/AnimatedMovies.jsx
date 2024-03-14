import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import cars from '../../../../Assets/ImageSections/Movies/Animated/cars.jpg'
import coco from '../../../../Assets/ImageSections/Movies/Animated/coco.jpg'
import findingnemo from '../../../../Assets/ImageSections/Movies/Animated/finding-nemo.jpg'
import moana from '../../../../Assets/ImageSections/Movies/Animated/moana.jpg'
import rayandthelastdragon from '../../../../Assets/ImageSections/Movies/Animated/raya-and-the-last-dragon.jpeg'
import spiderman2 from '../../../../Assets/ImageSections/Movies/Animated/spiderman-across-the-spider-verse.jpg'
import tintin from '../../../../Assets/ImageSections/Movies/Animated/the-adventures-of-tintin.jpg'
import toystory1 from '../../../../Assets/ImageSections/Movies/Animated/toy-story.jpg'
import up from '../../../../Assets/ImageSections/Movies/Animated/up.jpg'
import walle from '../../../../Assets/ImageSections/Movies/Animated/wall-e.jpg'

function AnimatedMovies() {
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
        if (direction === 'right' && slider < 9) {
            setSlider(slider + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIMATED MOVIES</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={cars} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={coco} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={findingnemo} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={moana} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rayandthelastdragon} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={spiderman2} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={tintin} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={toystory1} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={up} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={walle} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimatedMovies