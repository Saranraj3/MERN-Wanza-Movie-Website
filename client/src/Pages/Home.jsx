import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeSlider from '../Components/HomeSlider/HomeSlider'
import TrendingMovies from '../Components/Categories/Movies/TrendingMovies/TrendingMovies'

function Home() {
    return (
        <div>
            <Navbar/>
            <HomeSlider/>
            <TrendingMovies/>
        </div>
    )
}

export default Home