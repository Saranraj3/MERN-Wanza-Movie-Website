import React,{useState,useRef} from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import badboys from '../../../../../Assets/ImageSections/Movies/Genres/Action/bad-boys-for-life-4.jpg'
import bloodshot from '../../../../../Assets/ImageSections/Movies/Genres/Action/bloodshot.jpg'
import extraction from '../../../../../Assets/ImageSections/Movies/Genres/Action/extraction.jpg'
import johnwick from '../../../../../Assets/ImageSections/Movies/Genres/Action/john-wick-4.jpg'
import missionimpossible from '../../../../../Assets/ImageSections/Movies/Genres/Action/mission-impossible-7.jpg'
import nobody from '../../../../../Assets/ImageSections/Movies/Genres/Action/nobody.jpg'
import sisu from '../../../../../Assets/ImageSections/Movies/Genres/Action/sisu.jpg'
import theeaulizer from '../../../../../Assets/ImageSections/Movies/Genres/Action/the-equalizer-3.jpg'
import theoldguard from '../../../../../Assets/ImageSections/Movies/Genres/Action/the-old-guard.jpg'
import topgunmaverick from '../../../../../Assets/ImageSections/Movies/Genres/Action/top-gun-maverick-2.jpg'

function Action() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ACTION</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className='flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={badboys} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={bloodshot} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={extraction} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={johnwick} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={missionimpossible} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={nobody} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={sisu} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theeaulizer} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theoldguard} alt="" />
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={topgunmaverick} alt="" />
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default Action