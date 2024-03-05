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
            <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif'>ANIMATED MOVIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
                <img src={cars} alt="" />
                <img src={coco} alt="" />
                <img src={findingnemo} alt="" />
                <img src={moana} alt="" />
                <img src={rayandthelastdragon} alt="" />
                <img src={spiderman2} alt="" />
                <img src={tintin} alt="" />
                <img src={toystory1} alt="" />
                <img src={up} alt="" />
                <img src={walle} alt="" />

            </div>
        </div>
    )
}

export default AnimatedMovies