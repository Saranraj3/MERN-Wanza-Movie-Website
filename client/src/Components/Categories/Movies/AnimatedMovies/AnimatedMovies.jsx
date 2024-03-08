import React,{useState,useRef} from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import cars from '../../../../Assets/ImageSections/Movies/Animated/cars.jpg'
import coco from '../../../../Assets/ImageSections/Movies/Animated/coco.jpg'
import findingnemo from '../../../../Assets/ImageSections/Movies/Animated/finding-nemo.jpg'
import moana from '../../../../Assets/ImageSections/Movies/Animated/moana.jpg'
import rayandthelastdragon from '../../../../Assets/ImageSections/Movies/Animated/ray-and-the-last-dragon.jpg'
import spiderman2 from '../../../../Assets/ImageSections/Movies/Animated/spider-man-across-the-spider-verse.jpg'
import tintin from '../../../../Assets/ImageSections/Movies/Animated/tintin.jpg'
import toystory1 from '../../../../Assets/ImageSections/Movies/Animated/toy-story-1.jpg'
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
        if (direction === 'right' && slider < 8) {
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
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Cars</p>
                <img className='ml-[8.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={coco} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Coco</p>
                <img className='ml-[7.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={findingnemo} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Finding Nemo</p>
                <img className='ml-[5.2rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={moana} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Moana</p>
                <img className='ml-[6.6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={rayandthelastdragon} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Raya And The Last Dragon</p>
                <img className='ml-[2.3rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={spiderman2} alt="" />
                <p className='ml-[-18.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Spiderman Across The Spider Verse</p>
                <img className='ml-[.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={tintin} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Adventures Of Tintin</p>
                <img className='ml-[2.8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={toystory1} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Toy Story</p>
                <img className='ml-[5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={up} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Up</p>
                <img className='ml-[8.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={walle} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Wall E</p>
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimatedMovies