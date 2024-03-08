import React, { useState, useRef } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import babylon from '../../../../../Assets/ImageSections/Movies/Genres/Drama/babylon.jpg'
import beautifulmind from '../../../../../Assets/ImageSections/Movies/Genres/Drama/beautiful-mind.jpg'
import forrestgump from '../../../../../Assets/ImageSections/Movies/Genres/Drama/forrest-gump.jpg'
import goodwillhunting from '../../../../../Assets/ImageSections/Movies/Genres/Drama/good-will-hunting.jpg'
import pursuitofhappynes from '../../../../../Assets/ImageSections/Movies/Genres/Drama/pursuit-of-happyness.jpg'
import schinderlist from '../../../../../Assets/ImageSections/Movies/Genres/Drama/schindlers-list.jpg'
import sully from '../../../../../Assets/ImageSections/Movies/Genres/Drama/sully.jpg'
import thebansheeofinisherin from '../../../../../Assets/ImageSections/Movies/Genres/Drama/the-banshees-of-inisherin.jpg'
import theshawshankredemption from '../../../../../Assets/ImageSections/Movies/Genres/Drama/the-shawshank-redemption.jpg'
import theterminal from '../../../../../Assets/ImageSections/Movies/Genres/Drama/the-terminal.jpg'

function Drama() {
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
    <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>Drama</h1>
    <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
    <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={babylon} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={beautifulmind} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={forrestgump} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={goodwillhunting} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={pursuitofhappynes} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={schinderlist} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sully} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={thebansheeofinisherin} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theshawshankredemption} alt="" />
        <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theterminal} alt="" />
    </div>
    <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
</div>

  )
}

export default Drama