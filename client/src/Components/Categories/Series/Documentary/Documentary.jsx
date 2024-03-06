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
            <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>DOCUMENTARY</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={deppvheard} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={dontfuckwithcats} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={houseofsecrets} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={humanworldwithin} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={indianpredator} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={mumbaimafia} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={prehistoricworld} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={returntospace} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={socialdilemma} alt="" />
                <img className='rounded-md hover:scale-125 hover:duration-300' src={thehuntforveerappan} alt="" />
            </div>
        </div>
    )
}

export default Documentary