import React from 'react'
import deppvheard from '../../../../Assets/ImageSections/Series/Documentary/depp-v-heard.jpg'
import dontfuckwithcats from '../../../../Assets/ImageSections/Series/Documentary/dont-fuck-with-cats.jpg'
import houseofsecrets from '../../../../Assets/ImageSections/Series/Documentary/house-of-secrets-the-burari-deaths.jpg'
import humanworldwithin from '../../../../Assets/ImageSections/Series/Documentary/human-world-within.jpg'
import indianpredator from '../../../../Assets/ImageSections/Series/Documentary/indian-predator.jpg'
import mumbaimafia from '../../../../Assets/ImageSections/Series/Documentary/mumbai-mafia-police-vs-underworld.jpg'
import prehistoricworld from '../../../../Assets/ImageSections/Series/Documentary/prehistoric-world.jpg'
import returntospace from '../../../../Assets/ImageSections/Series/Documentary/return-to-space.jpg'
import socialdilemma from '../../../../Assets/ImageSections/Series/Documentary/social-dilemma.jpg'
import thehuntforveerappan from '../../../../Assets/ImageSections/Series/Documentary/the-hunt-for-veerappan.jpg'

function Documentary() {
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>DOCUMENTARY</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={deppvheard} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Depp v Heard</p>
                <img className='ml-[5.5rem] rounded-md hover:scale-125 hover:duration-300' src={dontfuckwithcats} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Don't F**k With Cats</p>
                <img className='ml-[3rem] rounded-md hover:scale-125 hover:duration-300' src={houseofsecrets} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>House Of Secrets</p>
                <img className='ml-[4.5rem] rounded-md hover:scale-125 hover:duration-300' src={humanworldwithin} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Human World Within</p>
                <img className='ml-[4rem] rounded-md hover:scale-125 hover:duration-300' src={indianpredator} alt="" />
                <p className='ml-[-15rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Indian Predator</p>
                <img className='ml-[6rem] rounded-md hover:scale-125 hover:duration-300' src={mumbaimafia} alt="" />
                <p className='ml-[-20rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Mumbai Mafia Police VS Underworld</p>
                <img className='ml-[rem] rounded-md hover:scale-125 hover:duration-300' src={prehistoricworld} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Prehistoric World</p>
                <img className='ml-[4.5rem] rounded-md hover:scale-125 hover:duration-300' src={returntospace} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Return To Space</p>
                <img className='ml-[6rem] rounded-md hover:scale-125 hover:duration-300' src={socialdilemma} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Social Dilemma</p>
                <img className='ml-[3.5rem] rounded-md hover:scale-125 hover:duration-300' src={thehuntforveerappan} alt="" />
                <p className='ml-[-15.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Hunt For Veerappan</p>
            </div>
        </div>
    )
}

export default Documentary