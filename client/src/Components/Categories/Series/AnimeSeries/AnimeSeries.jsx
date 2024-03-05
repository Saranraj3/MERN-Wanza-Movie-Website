import React from 'react'
import attackontitan from '../../../../Assets/ImageSections/Series/Anime/attack-on-titan.jpg'
import chainsawman from '../../../../Assets/ImageSections/Series/Anime/chainsaw-man.jpg'
import cowboybebop from '../../../../Assets/ImageSections/Series/Anime/cowboy-bebop.jpg'
import deathnote from '../../../../Assets/ImageSections/Series/Anime/death-note.jpg'
import demonslayer from '../../../../Assets/ImageSections/Series/Anime/demon-slayer.jpg'
import jujutsukaisen from '../../../../Assets/ImageSections/Series/Anime/jujutsu-kaisen.jpg'
import onepiece from '../../../../Assets/ImageSections/Series/Anime/one-piece.jpg'
import parasyte from '../../../../Assets/ImageSections/Series/Anime/parasyte.png'
import vinlandsaga from '../../../../Assets/ImageSections/Series/Anime/vinland-saga.jpg'

function AnimeSeries() {
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif'>ANIME SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
                <img src={attackontitan} alt="" />
                <img src={chainsawman} alt="" />
                <img src={cowboybebop} alt="" />
                <img src={deathnote} alt="" />
                <img src={demonslayer} alt="" />
                <img src={jujutsukaisen} alt="" />
                <img src={onepiece} alt="" />
                <img src={parasyte} alt="" />
                <img src={vinlandsaga} alt="" />

            </div>
        </div>
    )
}

export default AnimeSeries