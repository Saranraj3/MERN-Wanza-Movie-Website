import React from 'react'
import attackontitan from '../../../../Assets/ImageSections/Series/Anime/attack-on-titan.jpg'
import chainsawman from '../../../../Assets/ImageSections/Series/Anime/chainsaw-man.jpg'
import cowboybebop from '../../../../Assets/ImageSections/Series/Anime/cowboy-bebop.jpg'
import cyberpunk from '../../../../Assets/ImageSections/Series/Anime/cyberpunk-edgerunners.jpg'
import deathnote from '../../../../Assets/ImageSections/Series/Anime/death-note.jpg'
import demonslayer from '../../../../Assets/ImageSections/Series/Anime/demon-slayer.jpg'
import jujutsukaisen from '../../../../Assets/ImageSections/Series/Anime/jujutsu-kaisen.jpg'
import onepiece from '../../../../Assets/ImageSections/Series/Anime/one-piece.jpg'
import parasyte from '../../../../Assets/ImageSections/Series/Anime/parasyte.png'
import vinlandsaga from '../../../../Assets/ImageSections/Series/Anime/vinland-saga.jpg'

function AnimeSeries() {
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>ANIME SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={attackontitan} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={chainsawman} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={cowboybebop} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={cyberpunk} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={deathnote} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={demonslayer} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={jujutsukaisen} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={onepiece} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={parasyte} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={vinlandsaga} alt="" />

            </div>
        </div>
    )
}

export default AnimeSeries