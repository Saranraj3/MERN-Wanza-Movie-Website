import React from 'react'
import MoviesSlider from '../Components/Sliders/MoviesSlider'
import Action from '../Components/Categories/Movies/Genres/Action/Action'
import Adventure from '../Components/Categories/Movies/Genres/Adventure/Adventure'
import Biography from '../Components/Categories/Movies/Genres/Biography/Biography'
import Comedy from '../Components/Categories/Movies/Genres/Comedy/Comedy'
import Crime from '../Components/Categories/Movies/Genres/Crime/Crime'
import Drama from '../Components/Categories/Movies/Genres/Drama/Drama'

function Movies() {
  return (
    <div>
        <MoviesSlider/>
        <Action/>
        <Adventure/>
        <Biography/>
        <Comedy/>
        <Crime/>
        <Drama/>
    </div>
  )
}

export default Movies