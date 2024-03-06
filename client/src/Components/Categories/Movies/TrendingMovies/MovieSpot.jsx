import React from 'react'
import TrendingMovies from './TrendingMovies'
import MovieList from './MovieList'

function MovieSpot() {
    return (
        <div>
            {MovieList.map((movie, i) => {
                 <TrendingMovies key={i} image={movie.image} name={movie.name} />
            })}
        </div>
    )
}

export default MovieSpot