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
        <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif' >POUPULAR MOVIES</h1>
       <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
        <img className='rounded-md hover:scale-125 hover:duration-300' src={avatar1} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={fightclub} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={gladiator} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={interstellar} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={madmax} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={pulpfiction} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={terminator} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={thegodfather} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={thelordoftherings} alt="" />
        <img className='rounded-md hover:scale-125 hover:duration-300' src={thematrix} alt="" />

       </div>
    </div>
  )
}

export default PopularMovies