import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import barry from '../../../../../Assets/ImageSections/Series/Genres/Comedy/barry.jpg'
import chuck from '../../../../../Assets/ImageSections/Series/Genres/Comedy/chuck.jpg'
import fleabag from '../../../../../Assets/ImageSections/Series/Genres/Comedy/fleabag.jpg'
import goodomens from '../../../../../Assets/ImageSections/Series/Genres/Comedy/good-omens.jpg'
import manvsbee from '../../../../../Assets/ImageSections/Series/Genres/Comedy/man-vs-bee.jpg'
import onlymurderinthebuilding from '../../../../../Assets/ImageSections/Series/Genres/Comedy/only-murders-in-the-building.jpg'
import shameless from '../../../../../Assets/ImageSections/Series/Genres/Comedy/shameless.jpg'
import siliconvalley from '../../../../../Assets/ImageSections/Series/Genres/Comedy/silicon-valley.jpg'
import thebear from '../../../../../Assets/ImageSections/Series/Genres/Comedy/the-bear.jpg'
import thewhitelotus from '../../../../../Assets/ImageSections/Series/Genres/Comedy/the-white-lotus.jpeg'

function Comedy() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>COMEDY</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={barry} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={chuck} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={fleabag} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={goodomens} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={manvsbee} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={onlymurderinthebuilding} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={shameless} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={siliconvalley} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thebear} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thewhitelotus} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

    )
}

export default Comedy