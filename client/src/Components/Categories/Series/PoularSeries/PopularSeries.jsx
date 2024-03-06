import React from 'react'
import breakingbad from '../../../../Assets/ImageSections/Series/Popular/breaking-bad.jpg'
import daredevil from '../../../../Assets/ImageSections/Series/Popular/daredevil.jpg'
import dark from '../../../../Assets/ImageSections/Series/Popular/dark.jpg'
import gameofthrones from '../../../../Assets/ImageSections/Series/Popular/game-of-thrones.jpg'
import lost from '../../../../Assets/ImageSections/Series/Popular/lost.jpg'
import moneyheist from '../../../../Assets/ImageSections/Series/Popular/money-heist.jpg'
import peakyblinders from '../../../../Assets/ImageSections/Series/Popular/peaky-blinders.jpg'
import strangerthings from '../../../../Assets/ImageSections/Series/Popular/stranger-things.jpg'
import theboys from '../../../../Assets/ImageSections/Series/Popular/the-boys.jpg'
import vikings from '../../../../Assets/ImageSections/Series/Popular/vikings.jpg'

function PopularSeries() {
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>POPULAR SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
              <img className='rounded-md hover:scale-125 hover:duration-300' src={breakingbad} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={daredevil} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={dark} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={gameofthrones} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={lost} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={moneyheist} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={peakyblinders} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={strangerthings} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={theboys} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={vikings} alt="" />

            </div>
        </div>
    )
}

export default PopularSeries