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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>POPULAR SERIES</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={breakingbad} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Breaking Bad</p>
                <img className='ml-[4.5rem] rounded-md hover:scale-125 hover:duration-300' src={daredevil} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Daredevil</p>
                <img className='ml-[6rem] rounded-md hover:scale-125 hover:duration-300' src={dark} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Dark</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={gameofthrones} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Game Of Thrones</p>
                <img className='ml-[4rem] rounded-md hover:scale-125 hover:duration-300' src={lost} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Lost</p>
                <img className='ml-[8.5rem] rounded-md hover:scale-125 hover:duration-300' src={moneyheist} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Money Heist</p>
                <img className='ml-[5.5rem] rounded-md hover:scale-125 hover:duration-300' src={peakyblinders} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Peaky Blinders</p>
                <img className='ml-[5.5rem] rounded-md hover:scale-125 hover:duration-300' src={strangerthings} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Stranger Things</p>
                <img className='ml-[5rem] rounded-md hover:scale-125 hover:duration-300' src={theboys} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Boys</p>
                <img className='ml-[6.5rem] rounded-md hover:scale-125 hover:duration-300' src={vikings} alt="" />
                <p className='ml-[-11rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Vikings</p>
            </div>
        </div>
    )
}

export default PopularSeries