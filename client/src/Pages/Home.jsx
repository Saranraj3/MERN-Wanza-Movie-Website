import React from 'react'
import HomeSlider from '../Components/HomeSlider/HomeSlider'
import TrendingMovies from '../Components/Categories/Movies/TrendingMovies/TrendingMovies'
import PopularMovies from '../Components/Categories/Movies/PopularMovies/PopularMovies'
import AnimatedMovies from '../Components/Categories/Movies/AnimatedMovies/AnimatedMovies'
import AnimeMovies from '../Components/Categories/Movies/AnimeMovies/AnimeMovies'
import TrendingSeries from '../Components/Categories/Series/TrendingSeries/TrendingSeries'
import PopularSeries from '../Components/Categories/Series/PoularSeries/PopularSeries'
import AnimatedSeries from '../Components/Categories/Series/AnimatedSeries/AnimatedSeries'
import AnimeSeries from '../Components/Categories/Series/AnimeSeries/AnimeSeries'
import Sitcoms from '../Components/Categories/Series/Sitcoms/Sitcoms'
import Documentary from '../Components/Categories/Series/Documentary/Documentary'

function Home() {
    return (
        <div>
            <HomeSlider />
            <TrendingMovies />
            <PopularMovies />
            <AnimatedMovies />
            <AnimeMovies />
            <TrendingSeries />
            <PopularSeries />
            <AnimatedSeries />
            <AnimeSeries />
            <Sitcoms />
            <Documentary />
        </div>
    )
}

export default Home