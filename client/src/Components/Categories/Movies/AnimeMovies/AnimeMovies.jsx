import React,{useState,useRef} from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import graveofthefireflies from '../../../../Assets/ImageSections/Movies/Anime/grave-of-the-fireflies.jpg'
import howlscastle from '../../../../Assets/ImageSections/Movies/Anime/howls-castle.jpg'
import myneighbortotoro from '../../../../Assets/ImageSections/Movies/Anime/my-neighbor-totoro.jpg'
import perfectblue from '../../../../Assets/ImageSections/Movies/Anime/perfect-blue.jpg'
import ponyo from '../../../../Assets/ImageSections/Movies/Anime/ponyo.jpg'
import princessmononoke from '../../../../Assets/ImageSections/Movies/Anime/princess-mononoke.jpg'
import spiritedaway from '../../../../Assets/ImageSections/Movies/Anime/spirited-away.jpg'
import suzume from '../../../../Assets/ImageSections/Movies/Anime/suzume.jpg'
import theboyandtheheron from '../../../../Assets/ImageSections/Movies/Anime/the-boy-and-the-heron.jpg'
import yourname from '../../../../Assets/ImageSections/Movies/Anime/your-name.jpg'

function AnimeMovies() {
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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIME MOVIES</h1>
            <p style={{ display: !arrow && 'none' }} className='z-50 cursor-pointer hover:scale-150 hover:duration-300 left-0 mt-[5rem] ml-3 absolute text-white' onClick={() => handleClick('left')} ><KeyboardArrowLeftIcon /></p>
            <div className=' flex cursor-pointer z-50 w-[20rem] h-[10rem] gap-5 mt-5 ml-12 translate-x-0 transition duration-1000 ease-out ' ref={listRef}>
                <img className='rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={graveofthefireflies} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Grave Of The Fire Flies</p>
                <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={howlscastle} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Howl's Moving Castle</p>
                <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={myneighbortotoro} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>My Neighbor Totoro</p>
                <img className='ml-[4.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={perfectblue} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Perfect Blue</p>
                <img className='ml-[5.8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={ponyo} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Ponyo</p>
                <img className='ml-[8rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={princessmononoke} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Princess Mononoke</p>
                <img className='ml-[4rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={spiritedaway} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Spirited Away</p>
                <img className='ml-[5.5rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={suzume} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Suzume</p>
                <img className='ml-[7rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={theboyandtheheron} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Boy And The Heron</p>
                <img className='ml-[2.6rem] rounded-md hover:opacity-85 hover:scale-110 hover:duration-200' src={yourname} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Your Name</p>
            </div>
            <p className='cursor-pointer hover:scale-150 z-50 hover:duration-300 right-0 mt-[-6rem] absolute text-white' onClick={() => handleClick('right')}><KeyboardArrowRightIcon /></p>
        </div>
    )
}

export default AnimeMovies