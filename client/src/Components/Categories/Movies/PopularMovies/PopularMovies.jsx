import React from 'react'
import avatar1 from '../../../../Assets/ImageSections/Movies/Popular/avatar-1.jpg'
import fightclub from '../../../../Assets/ImageSections/Movies/Popular/fight-club.png'
import gladiator from '../../../../Assets/ImageSections/Movies/Popular/gladiator.jpg'
import interstellar from '../../../../Assets/ImageSections/Movies/Popular/interstellar.jpg'
import madmax from '../../../../Assets/ImageSections/Movies/Popular/mad-max-fury-road.jpg'
import pulpfiction from '../../../../Assets/ImageSections/Movies/Popular/pulp-fiction.jpg'
import terminator from '../../../../Assets/ImageSections/Movies/Popular/terminator.jpg'
import thegodfather from '../../../../Assets/ImageSections/Movies/Popular/the-godfather.jpg'
import thelordoftherings from '../../../../Assets/ImageSections/Movies/Popular/the-lord-of-the-rings.jpg'
import thematrix from '../../../../Assets/ImageSections/Movies/Popular/the-matrix.jpg'

function PopularMovies() {
  return (
    <div>
        <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif' >POUPULAR MOVIES</h1>
       <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
        <img className='rounded-md hover:scale-125 hover:duration-300' src={avatar1} alt="" />
        <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Avatar</p>
        <img className='ml-[6.5rem] rounded-md hover:scale-125 hover:duration-300' src={fightclub} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Fight Club</p>
        <img className='ml-[6.8rem] rounded-md hover:scale-125 hover:duration-300' src={gladiator} alt="" />
        <p className='ml-[-12.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Gladiator</p>
        <img className='ml-[6.8rem] rounded-md hover:scale-125 hover:duration-300' src={interstellar} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Interstellar</p>
        <img className='ml-[6.2rem] rounded-md hover:scale-125 hover:duration-300' src={madmax} alt="" />
        <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Mad Max Fury Road</p>
        <img className='ml-[3.5rem] rounded-md hover:scale-125 hover:duration-300' src={pulpfiction} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Pulp Fiction</p>
        <img className='ml-[6.5rem] rounded-md hover:scale-125 hover:duration-300' src={terminator} alt="" />
        <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Terminator</p>
        <img className='ml-[6rem] rounded-md hover:scale-125 hover:duration-300' src={thegodfather} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Godfather</p>
        <img className='ml-[6rem] rounded-md hover:scale-125 hover:duration-300' src={thelordoftherings} alt="" />
        <p className='ml-[-16.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Lord Of The Rings The <br /> Fellowship Of The Ring</p>
        <img className='ml-[3rem] rounded-md hover:scale-125 hover:duration-300' src={thematrix} alt="" />
        <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold' >The Matrix</p>
       </div>
    </div>
  )
}

export default PopularMovies