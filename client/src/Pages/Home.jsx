import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeSlider from '../Components/HomeSlider/HomeSlider'
import TrendingMovies from '../Components/Categories/Movies/TrendingMovies/TrendingMovies'
import PopularMovies from '../Components/Categories/Movies/PopularMovies/PopularMovies'

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeSlider/>
            <TrendingMovies/>
            <PopularMovies/>
        </div>
    )
}

export default Home