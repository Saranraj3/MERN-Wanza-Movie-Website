import React from 'react'
import footer from '../../Assets/Logo/footer.jpg'
function Footer() {
  return (
    <div className='mt-20 absolute'>
      <img className='opacity-20 relative' src={footer} alt="" />
      <h1 className='mt-[-25rem] ml-[6rem] text-xl font-serif font-semibold  text-white '>INFORM</h1>
      <p className=' mt-[2rem] ml-[6rem] text-lg font-extrabold text-white'>Home</p>
      <p className=' mt-[1rem] ml-[6rem] text-lg font-extrabold text-white'>Contact Us</p>
      <p className=' mt-[1rem] ml-[6rem] text-lg font-extrabold text-white'>Terms Of Service</p>
      <p className=' mt-[1rem] ml-[6rem] text-lg font-extrabold text-white'>About Us</p>
      
      <h1 className='mt-[-13.8rem] ml-[25rem] text-xl font-serif font-semibold  text-white '>RESOURCES</h1>
      <p className=' mt-[2rem] ml-[25rem] text-lg font-extrabold text-white'>Live</p>
      <p className=' mt-[1rem] ml-[25rem] text-lg font-extrabold text-white'>Premium</p>
      <p className=' mt-[1rem] ml-[25rem] text-lg font-extrabold text-white'>FAQ</p>
      <p className=' mt-[1rem] ml-[25rem] text-lg font-extrabold text-white'>Privacy Policy</p>

      <h1 className='mt-[-13.8rem] ml-[45rem] text-xl font-serif font-semibold  text-white '>CATEGORYS</h1>
      <p className=' mt-[2rem] ml-[45rem] text-lg font-extrabold text-white'>Movies</p>
      <p className=' mt-[1rem] ml-[45rem] text-lg font-extrabold text-white'>Tv Shows</p>
      <p className=' mt-[1rem] ml-[45rem] text-lg font-extrabold text-white'>API</p>
      <p className=' mt-[1rem] ml-[45rem] text-lg font-extrabold text-white'>Developer</p>

    </div>
  )
}

export default Footer