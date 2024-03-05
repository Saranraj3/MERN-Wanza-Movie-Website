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
            <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif'>ANIMATED SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
             <img src={arcane} alt="" />
             <img src={avatarthelastairbender} alt="" />
             <img src={blueeyesamurai} alt="" />
             <img src={castlevania} alt="" />
             <img src={invincible} alt="" />
             <img src={lovedeathplusrobots} alt="" />
             <img src={primal} alt="" />
             <img src={rickandmorty} alt="" />
             <img src={scavengers} alt="" />
             <img src={undone} alt="" />
            
            </div>
        </div>
    )
}

export default AnimatedSeries