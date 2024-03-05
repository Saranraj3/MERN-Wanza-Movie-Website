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
            <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif'>TRENDING SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
                <img src={ashoka} alt="" />
                <img src={beef} alt="" />
                <img src={deadringers} alt="" />
                <img src={fallout} alt="" />
                <img src={fargo} alt="" />
                <img src={genv} alt="" />
                <img src={halo} alt="" />
                <img src={penguin} alt="" />
                <img src={thesympathize} alt="" />
                <img src={truedetective} alt="" />

            </div>
        </div>
    )
}

export default TrendingSeries