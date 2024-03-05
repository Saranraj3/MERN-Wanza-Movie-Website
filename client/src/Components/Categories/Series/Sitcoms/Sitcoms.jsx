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
            <h1 className='text-white cursor-pointer text-2xl mt-5 ml-5 font-serif'>SITCOMS</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-5 '>
              <img src={rock} alt="" />
              <img src={brooklynninenine} alt="" />
              <img src={community} alt="" />
              <img src={friends} alt="" />
              <img src={howimetyourmother} alt="" />
              <img src={modernfamily} alt="" />
              <img src={seinfeld} alt="" />
              <img src={thebigbangtheory} alt="" />
              <img src={theoffice} alt="" />
              <img src={youngsheldon} alt="" />

            </div>
        </div>
    )
}

export default Sitcoms