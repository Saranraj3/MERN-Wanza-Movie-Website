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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>ANIMATED SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={arcane} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Arcane</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={avatarthelastairbender} alt="" />
                <p className='ml-[-16rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Avatar The Last Airbender</p>
                <img className='ml-[2.5rem] rounded-md hover:scale-125 hover:duration-300' src={blueeyesamurai} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Blue Eye Samurai</p>
                <img className='ml-[5rem] rounded-md hover:scale-125 hover:duration-300' src={castlevania} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Castlevania</p>
                <img className='ml-[6.5rem] rounded-md hover:scale-125 hover:duration-300' src={invincible} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Invincible</p>
                <img className='ml-[6.5rem] rounded-md hover:scale-125 hover:duration-300' src={lovedeathplusrobots} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Love Death + Robots</p>
                <img className='ml-[4rem] rounded-md hover:scale-125 hover:duration-300' src={primal} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Primal</p>
                <img className='ml-[7.8rem] rounded-md hover:scale-125 hover:duration-300' src={rickandmorty} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Rick And Morty</p>
                <img className='ml-[5.5rem] rounded-md hover:scale-125 hover:duration-300' src={scavengers} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Scavengers</p>
                <img className='ml-[6.5rem] rounded-md hover:scale-125 hover:duration-300' src={undone} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Undone</p>
            </div>
        </div>
    )
}

export default AnimatedSeries