import React from 'react'
import MoviesSlider from '../Components/Sliders/MoviesSlider'
import Action from '../Components/Categories/Movies/Genres/Action/Action'
import Adventure from '../Components/Categories/Movies/Genres/Adventure/Adventure'
import Biography from '../Components/Categories/Movies/Genres/Biography/Biography'
import Comedy from '../Components/Categories/Movies/Genres/Comedy/Comedy'

function Movies() {
  return (
    <div>
        <MoviesSlider/>
        <Action/>
        <Adventure/>
        <Biography/>
        <Comedy/>
    </div>
  )
}

export default Movies