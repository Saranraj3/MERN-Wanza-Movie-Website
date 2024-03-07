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
            <h1 className='text-white cursor-pointer text-2xl mt-16 ml-12 font-serif'>SITCOMS</h1>
            <div className='flex cursor-pointer w-[20rem] h-[10rem] gap-5 mt-5 ml-12 '>
                <img className='rounded-md hover:scale-125 hover:duration-300' src={rock} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>30 Rock</p>
                <img className='ml-[7rem] rounded-md hover:scale-125 hover:duration-300' src={brooklynninenine} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Brooklyn Nine Nine</p>
                <img className='ml-[3.5rem] rounded-md hover:scale-125 hover:duration-300' src={community} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Community</p>
                <img className='ml-[6.5rem] rounded-md hover:scale-125 hover:duration-300' src={friends} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Friends</p>
                <img className='ml-[7.5rem] rounded-md hover:scale-125 hover:duration-300' src={howimetyourmother} alt="" />
                <p className='ml-[-15.5rem] mt-[10.5rem] text-nowrap text-white font-semibold'>How I Met Your Mother</p>
                <img className='ml-[3.5rem] rounded-md hover:scale-125 hover:duration-300' src={modernfamily} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Modern Family</p>
                <img className='ml-[6rem] rounded-md hover:scale-125 hover:duration-300' src={seinfeld} alt="" />
                <p className='ml-[-12rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Seinfeld</p>
                <img className='ml-[7rem] rounded-md hover:scale-125 hover:duration-300' src={thebigbangtheory} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Big Bang Theory</p>
                <img className='ml-[3rem] rounded-md hover:scale-125 hover:duration-300' src={theoffice} alt="" />
                <p className='ml-[-13rem] mt-[10.5rem] text-nowrap text-white font-semibold'>The Office </p>
                <img className='ml-[7rem] rounded-md hover:scale-125 hover:duration-300' src={youngsheldon} alt="" />
                <p className='ml-[-14rem] mt-[10.5rem] text-nowrap text-white font-semibold'>Young Sheldon</p>
            </div>
        </div>
    )
}

export default Sitcoms