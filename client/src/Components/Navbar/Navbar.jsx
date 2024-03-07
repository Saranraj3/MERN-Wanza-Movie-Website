import React from 'react'
import Logo from '../../Assets/Logo/film.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {

    return (
        <div className='sticky top-0 z-10 h-12 pt-2 bg-black '>
            <img className='h-7 ml-4 cursor-pointer' src={Logo} alt="" />
            <h1 className='text-white ml-16 mt-[-1.5rem] cursor-pointer'>Wanza</h1>
            <ul className=' text-white text-xl mr-5 flex gap-10 mt-[-1.7rem] cursor-pointer justify-center font-serif'>
                <li>Home</li>
                <li>Movies</li>
                <li>Shows</li>
                <li>About</li>
            </ul>
            <div className='flex gap-5 justify-end cursor-pointer mr-[-1rem] mt-[-1.7rem]'>
                <p className='text-white'><SearchIcon /></p>
                <p className='text-white'><FavoriteOutlinedIcon /></p>
                <p className='text-white'><PersonIcon /></p>
                <p className='invisible text-white'><MenuIcon /></p>
            </div>
        </div>
    )
}

export default Navbar