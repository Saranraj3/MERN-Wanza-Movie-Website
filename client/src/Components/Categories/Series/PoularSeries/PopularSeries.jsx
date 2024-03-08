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
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={breakingbad} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Breaking Bad</p>
                <img className='ml-[4.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={daredevil} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Daredevil</p>
                <img className='ml-[6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dark} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Dark</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={gameofthrones} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Game Of Thrones</p>
                <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lost} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Lost</p>
                <img className='ml-[8.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={moneyheist} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Money Heist</p>
                <img className='ml-[5.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={peakyblinders} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Peaky Blinders</p>
                <img className='ml-[5.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={strangerthings} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Stranger Things</p>
                <img className='ml-[5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theboys} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Boys</p>
                <img className='ml-[6.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={vikings} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Vikings</p>
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default PopularSeries