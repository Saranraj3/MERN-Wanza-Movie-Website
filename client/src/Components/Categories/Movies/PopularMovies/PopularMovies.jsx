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
        <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif' >POUPULAR MOVIES</h1>
       <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
        <img src={avatar1} alt="" />
        <img src={fightclub} alt="" />
        <img src={gladiator} alt="" />
        <img src={interstellar} alt="" />
        <img src={madmax} alt="" />
        <img src={pulpfiction} alt="" />
        <img src={terminator} alt="" />
        <img src={thegodfather} alt="" />
        <img src={thelordoftherings} alt="" />
        <img src={thematrix} alt="" />

       </div>
    </div>
  )
}

export default PopularMovies