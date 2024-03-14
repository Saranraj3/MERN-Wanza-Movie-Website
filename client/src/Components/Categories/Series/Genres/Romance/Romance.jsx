import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import bridgerton from '../../../../../Assets/ImageSections/Series/Genres/Romance/bridgerton.jpg'
import dashandlily from '../../../../../Assets/ImageSections/Series/Genres/Romance/dash-and-lily.jpg'
import emilyinparis from '../../../../../Assets/ImageSections/Series/Genres/Romance/emily-in-paris.jpg'
import lookingforalaska from '../../../../../Assets/ImageSections/Series/Genres/Romance/looking-for-alaska.jpg'
import love from '../../../../../Assets/ImageSections/Series/Genres/Romance/love.jpg'
import mylifewithwalterboys from '../../../../../Assets/ImageSections/Series/Genres/Romance/my-life-with-walter-boys.jpg'
import neverhaveiever from '../../../../../Assets/ImageSections/Series/Genres/Romance/never-have-i-ever.jpg'
import normalpeople from '../../../../../Assets/ImageSections/Series/Genres/Romance/normal-people.jpg'
import sexeducation from '../../../../../Assets/ImageSections/Series/Genres/Romance/sex-education.jpg'
import thesummeriturnedpretty from '../../../../../Assets/ImageSections/Series/Genres/Romance/the-summer-i-turned-pretty.jpg'

function Romance() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ROMANCE</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={bridgerton} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={dashandlily} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={emilyinparis} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={lookingforalaska} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={love} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={mylifewithwalterboys} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={neverhaveiever} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={normalpeople} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sexeducation} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thesummeriturnedpretty} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default Romance