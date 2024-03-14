import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo/film.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {

    return (
        <div className='sticky top-0 z-10 h-12 pt-2 bg-black overflow-x-hidden overflow-y-hidden'>
            <img className='h-7 ml-4 cursor-pointer' src={Logo} alt="" />
            <h1 className='text-white ml-16 mt-[-1.5rem] cursor-pointer'>Wanza</h1>
            <ul className='text-white text-xl mr-5 flex gap-10 mt-[-1.7rem] cursor-pointer justify-center font-serif'>
                <Link to='/' className='hover:text-blue-500'>Home</Link>
                <Link to='/movies' className='hover:text-blue-500'>Movies</Link>
                <Link to='/shows' className='hover:text-blue-500'>Shows</Link>
                <li className='hover:text-blue-500'>About</li>
            </ul>
            <div className='flex gap-5 justify-end cursor-pointer mr-[-1rem] mt-[-1.7rem]'>
                <p className='hover:opacity-50 text-white'><SearchIcon /></p>
                <p className='hover:opacity-50 text-white'><FavoriteOutlinedIcon /></p>
                <p className='hover:opacity-50 text-white'><PersonIcon /></p>
                <p className='invisible text-white'><MenuIcon /></p>
            </div>
        </div>
    )
}

export default Navbar