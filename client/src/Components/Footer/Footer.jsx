import React from 'react'
import Logo from '../../Assets/Logo/film.png'

function Footer() {
  return (
    <div className=' mt-[40rem]  '>

        <h1 className='cursor-pointer  mt-[-25rem] ml-[6rem] text-xl font-serif font-semibold text-white '>INFORM</h1>
        <p className='cursor-pointer  mt-[2rem] ml-[6rem] text-lg font-extrabold text-white'>Home</p>
        <p className='cursor-pointer mt-[1rem] ml-[6rem] text-lg font-extrabold text-white'>Contact Us</p>
        <p className='cursor-pointer mt-[1rem] ml-[6rem] text-lg font-extrabold text-white'>Terms Of Service</p>
        <p className='cursor-pointer mt-[1rem] ml-[6rem] text-lg font-extrabold text-white'>About Us</p>

        <h1 className='cursor-pointer mt-[-13.8rem] ml-[25rem] text-xl font-serif font-semibold  text-white '>RESOURCES</h1>
        <p className=' cursor-pointer mt-[2rem] ml-[25rem] text-lg font-extrabold text-white'>Live</p>
        <p className=' cursor-pointer mt-[1rem] ml-[25rem] text-lg font-extrabold text-white'>Premium</p>
        <p className=' cursor-pointer mt-[1rem] ml-[25rem] text-lg font-extrabold text-white'>FAQ</p>
        <p className=' cursor-pointer mt-[1rem] ml-[25rem] text-lg font-extrabold text-white'>Privacy Policy</p>

        <h1 className='cursor-pointer mt-[-13.8rem] ml-[45rem] text-xl font-serif font-semibold text-white '>CATEGORYS</h1>
        <p className=' cursor-pointer mt-[2rem] ml-[45rem] text-lg font-extrabold text-white'>Movies</p>
        <p className=' cursor-pointer mt-[1rem] ml-[45rem] text-lg font-extrabold text-white'>Tv Shows</p>
        <p className=' cursor-pointer mt-[1rem] ml-[45rem] text-lg font-extrabold text-white'>API</p>
        <p className=' cursor-pointer mt-[1rem] ml-[45rem] text-lg font-extrabold text-white'>Developer</p>
        <img className='h-10 ml-[60rem] cursor-pointer' src={Logo} alt="" />
        <h1 className='text-white mt-[-2rem] ml-[63rem] '>Wanza</h1>
      </div>
  )
}

export default Footer