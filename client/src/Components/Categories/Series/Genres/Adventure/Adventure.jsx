import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import hundread from '../../../../../Assets/ImageSections/Series/Genres/Adventures/100.jpg'
import blacksail from '../../../../../Assets/ImageSections/Series/Genres/Adventures/black-sail.jpg'
import hisdarkmaterial from '../../../../../Assets/ImageSections/Series/Genres/Adventures/his-dark-materials.jpg'
import intothebadlands from '../../../../../Assets/ImageSections/Series/Genres/Adventures/into-the-badlands.jpg'
import invisiblecity from '../../../../../Assets/ImageSections/Series/Genres/Adventures/invisible-city.jpg'
import onepiece from '../../../../../Assets/ImageSections/Series/Genres/Adventures/one-piece.jpg'
import outerbanks from '../../../../../Assets/ImageSections/Series/Genres/Adventures/outer-banks.jpg'
import see from '../../../../../Assets/ImageSections/Series/Genres/Adventures/see.jpg'
import sweettooth from '../../../../../Assets/ImageSections/Series/Genres/Adventures/sweet-tooth.jpg'
import terranova from '../../../../../Assets/ImageSections/Series/Genres/Adventures/terra-nova.jpg'

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
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={hundread} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={blacksail} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={hisdarkmaterial} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={intothebadlands} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={invisiblecity} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={onepiece} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={outerbanks} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={see} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sweettooth} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={terranova} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>

    )
}

export default Adventure