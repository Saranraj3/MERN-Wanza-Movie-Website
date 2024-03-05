import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeSlider from '../Components/HomeSlider/HomeSlider'
import TrendingMovies from '../Components/Categories/Movies/TrendingMovies/TrendingMovies'
import PopularMovies from '../Components/Categories/Movies/PopularMovies/PopularMovies'
import AnimatedMovies from '../Components/Categories/Movies/AnimatedMovies/AnimatedMovies'
import AnimeMovies from '../Components/Categories/Movies/AnimeMovies/AnimeMovies'

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeSlider/>
            <TrendingMovies/>
            <PopularMovies/>
            <AnimatedMovies/>
            <AnimeMovies/>
        </div>
    )
}

export default Home