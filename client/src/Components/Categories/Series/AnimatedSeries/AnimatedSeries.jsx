import React from 'react'
import arcane from '../../../../Assets/ImageSections/Series/Animated/arcane.jpg'
import avatarthelastairbender from '../../../../Assets/ImageSections/Series/Animated/avatar-the-last-airbender.jpg'
import blueeyesamurai from '../../../../Assets/ImageSections/Series/Animated/blue-eye-samurai.png'
import castlevania from '../../../../Assets/ImageSections/Series/Animated/castlevania.jpg'
import invincible from '../../../../Assets/ImageSections/Series/Animated/invincible.jpg'
import lovedeathplusrobots from '../../../../Assets/ImageSections/Series/Animated/love-death-plus-robots.jpg'
import primal from '../../../../Assets/ImageSections/Series/Animated/primal.jpg'
import rickandmorty from '../../../../Assets/ImageSections/Series/Animated/rick-and-morty.jpg'
import scavengers from '../../../../Assets/ImageSections/Series/Animated/scavengers-reign.jpg'
import undone from '../../../../Assets/ImageSections/Series/Animated/undone.jpg'

function AnimatedSeries() {
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>ANIMATED SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={arcane} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={avatarthelastairbender} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={blueeyesamurai} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={castlevania} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={invincible} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={lovedeathplusrobots} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={primal} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={rickandmorty} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={scavengers} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={undone} alt="" />

            </div>
        </div>
    )
}

export default AnimatedSeries