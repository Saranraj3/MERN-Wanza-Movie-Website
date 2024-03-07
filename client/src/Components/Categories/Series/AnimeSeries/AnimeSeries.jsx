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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIME SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={attackontitan} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Attack On Titan</p>
                <img className='ml-[3.2rem] rounded-md hover:scale-125 hover:duration-300' src={chainsawman} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Chainsaw Man</p>
                <img className='ml-[5rem] rounded-md hover:scale-125 hover:duration-300' src={cowboybebop} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Cowboy Bebop</p>
                <img className='ml-[4rem] rounded-md hover:scale-125 hover:duration-300' src={cyberpunk} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Cyberpunk Edgerunners</p>
                <img className='ml-[3.5rem] rounded-md hover:scale-125 hover:duration-300' src={deathnote} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Death Note</p>
                <img className='ml-[5.4rem] rounded-md hover:scale-125 hover:duration-300' src={demonslayer} alt="" />
                <p className='ml-[-11.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Demon Slayer</p>
                <img className='ml-[3.6rem] rounded-md hover:scale-125 hover:duration-300' src={jujutsukaisen} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Jujutsu Kaisen</p>
                <img className='ml-[6rem] rounded-md hover:scale-125 hover:duration-300' src={onepiece} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>One Piece</p>
                <img className='ml-[7rem] rounded-md hover:scale-125 hover:duration-300' src={parasyte} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Parasyte</p>
                <img className='ml-[8.5rem] rounded-md hover:scale-125 hover:duration-300' src={vinlandsaga} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Vinland Saga</p>
            </div>
        </div>
    )
}

export default AnimeSeries