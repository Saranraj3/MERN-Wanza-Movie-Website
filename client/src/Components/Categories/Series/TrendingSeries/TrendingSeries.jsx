import React from 'react'
import ashoka from '../../../../Assets/ImageSections/Series/Trending/ashoka.jpg'
import beef from '../../../../Assets/ImageSections/Series/Trending/beef.jpg'
import deadringers from '../../../../Assets/ImageSections/Series/Trending/dead-ringers.jpg'
import fallout from '../../../../Assets/ImageSections/Series/Trending/fallout.jpg'
import fargo from '../../../../Assets/ImageSections/Series/Trending/fargo.png'
import genv from '../../../../Assets/ImageSections/Series/Trending/gen-v.jpg'
import halo from '../../../../Assets/ImageSections/Series/Trending/halo.jpg'
import penguin from '../../../../Assets/ImageSections/Series/Trending/penguin.jpg'
import thesympathize from '../../../../Assets/ImageSections/Series/Trending/the-sympathize.jpg'
import truedetective from '../../../../Assets/ImageSections/Series/Trending/true-detective.jpg'

function TrendingSeries() {
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>TRENDING SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={ashoka} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={beef} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={deadringers} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={fallout} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={fargo} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={genv} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={halo} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={penguin} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={thesympathize} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={truedetective} alt="" />

            </div>
        </div>
    )
}

export default TrendingSeries