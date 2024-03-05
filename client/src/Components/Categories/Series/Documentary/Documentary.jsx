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
            <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif'>DOCUMENTARY</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
                <img src={deppvheard} alt="" />
                <img src={dontfuckwithcats} alt="" />
                <img src={houseofsecrets} alt="" />
                <img src={humanworldwithin} alt="" />
                <img src={indianpredator} alt="" />
                <img src={mumbaimafia} alt="" />
                <img src={prehistoricworld} alt="" />
                <img src={returntospace} alt="" />
                <img src={socialdilemma} alt="" />
                <img src={thehuntforveerappan} alt="" />
            </div>
        </div>
    )
}

export default Documentary