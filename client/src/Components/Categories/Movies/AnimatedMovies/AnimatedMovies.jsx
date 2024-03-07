import React from 'react'
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
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIMATED MOVIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={cars} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Cars</p>
                <img className='ml-[8.5rem] rounded-md hover:scale-125 hover:duration-300' src={coco} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Coco</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={findingnemo} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Finding Nemo</p>
                <img className='ml-[5.2rem] rounded-md hover:scale-125 hover:duration-300' src={moana} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Moana</p>
                <img className='ml-[6.6rem] rounded-md hover:scale-125 hover:duration-300' src={rayandthelastdragon} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Raya And The Last Dragon</p>
                <img className='ml-[2.3rem] rounded-md hover:scale-125 hover:duration-300' src={spiderman2} alt="" />
                <p className='ml-[-18.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Spiderman Across The Spider Verse</p>
                <img className='ml-[.5rem] rounded-md hover:scale-125 hover:duration-300' src={tintin} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Adventures Of Tintin</p>
                <img className='ml-[2.8rem] rounded-md hover:scale-125 hover:duration-300' src={toystory1} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Toy Story</p>
                <img className='ml-[5rem] rounded-md hover:scale-125 hover:duration-300' src={up} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Up</p>
                <img className='ml-[8.5rem] rounded-md hover:scale-125 hover:duration-300' src={walle} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Wall E</p>
            </div>
        </div>
    )
}

export default AnimatedMovies