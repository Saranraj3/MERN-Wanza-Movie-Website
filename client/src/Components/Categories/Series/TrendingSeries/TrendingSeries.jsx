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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>TRENDING SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={ashoka} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Ahsoka</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={beef} alt="" />
                <p className='ml-[-11.3rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Beef</p>
                <img className='ml-[8rem] rounded-md hover:scale-125 hover:duration-300' src={deadringers} alt="" />
                <p className='ml-[-14.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Dead Ringers</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={fallout} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Fallout</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={fargo} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Fargo</p>
                <img className='ml-[8rem] rounded-md hover:scale-125 hover:duration-300' src={genv} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Gen V</p>
                <img className='ml-[8rem] rounded-md hover:scale-125 hover:duration-300' src={halo} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Halo</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={penguin} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Penguin</p>
                <img className='ml-[7rem] rounded-md hover:scale-125 hover:duration-300' src={thesympathize} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Sympathize</p>
                <img className='ml-[5.5rem] rounded-md hover:scale-125 hover:duration-300' src={truedetective} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>True Detective</p>
            </div>
        </div>
    )
}

export default TrendingSeries