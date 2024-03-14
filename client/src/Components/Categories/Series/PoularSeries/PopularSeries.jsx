import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import breakingbad from '../../../../Assets/ImageSections/Series/Popular/breaking-bad.jpg'
import daredevil from '../../../../Assets/ImageSections/Series/Popular/daredevil.jpg'
import dark from '../../../../Assets/ImageSections/Series/Popular/dark.jpg'
import gameofthrones from '../../../../Assets/ImageSections/Series/Popular/game-of-thrones.jpg'
import lost from '../../../../Assets/ImageSections/Series/Popular/lost.jpg'
import moneyheist from '../../../../Assets/ImageSections/Series/Popular/money-heist.jpg'
import peakyblinders from '../../../../Assets/ImageSections/Series/Popular/peaky-blinders.jpg'
import strangerthings from '../../../../Assets/ImageSections/Series/Popular/stranger-things.jpg'
import theboys from '../../../../Assets/ImageSections/Series/Popular/the-boys.jpg'
import vikings from '../../../../Assets/ImageSections/Series/Popular/vikings.jpg'

function PopularSeries() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>POPULAR SERIES</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out' ref={listRef}>
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={breakingbad} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={daredevil} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dark} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={gameofthrones} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lost} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={moneyheist} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={peakyblinders} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={strangerthings} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theboys} alt="" />
                <img className=' rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={vikings} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default PopularSeries