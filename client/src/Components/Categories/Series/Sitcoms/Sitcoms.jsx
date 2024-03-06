import React from 'react'
import rock from '../../../../Assets/ImageSections/Series/Sitcoms/30-rock.jpg'
import brooklynninenine from '../../../../Assets/ImageSections/Series/Sitcoms/brooklyn-nine-nine.jpg'
import community from '../../../../Assets/ImageSections/Series/Sitcoms/community.jpg'
import friends from '../../../../Assets/ImageSections/Series/Sitcoms/friends.jpg'
import howimetyourmother from '../../../../Assets/ImageSections/Series/Sitcoms/how-i-met-your-mother.jpg'
import modernfamily from '../../../../Assets/ImageSections/Series/Sitcoms/modern-family.jpg'
import seinfeld from '../../../../Assets/ImageSections/Series/Sitcoms/seinfeld.jpg'
import thebigbangtheory from '../../../../Assets/ImageSections/Series/Sitcoms/the-big-bang-theory.jpg'
import theoffice from '../../../../Assets/ImageSections/Series/Sitcoms/the-office.jpg'
import youngsheldon from '../../../../Assets/ImageSections/Series/Sitcoms/young-sheldon.jpg'

function Sitcoms() {
    return (
        <div>
            <h1 className='text-white cursor-pointer text-2xl mt-10 ml-12 font-serif'>SITCOMS</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
              <img className='rounded-md hover:scale-125 hover:duration-300' src={rock} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={brooklynninenine} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={community} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={friends} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={howimetyourmother} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={modernfamily} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={seinfeld} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={thebigbangtheory} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={theoffice} alt="" />
              <img className='rounded-md hover:scale-125 hover:duration-300' src={youngsheldon} alt="" />

            </div>
        </div>
    )
}

export default Sitcoms