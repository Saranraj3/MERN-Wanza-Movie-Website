import React from 'react'
import MoviesSlider from '../Components/Sliders/MoviesSlider'
import Action from '../Components/Categories/Movies/Genres/Action/Action'
import Adventure from '../Components/Categories/Movies/Genres/Adventure/Adventure'
import Biography from '../Components/Categories/Movies/Genres/Biography/Biography'
import Comedy from '../Components/Categories/Movies/Genres/Comedy/Comedy'
import Crime from '../Components/Categories/Movies/Genres/Crime/Crime'
import Drama from '../Components/Categories/Movies/Genres/Drama/Drama'
import Fantasy from '../Components/Categories/Movies/Genres/Fantasy/Fantasy'
import Horror from '../Components/Categories/Movies/Genres/Horror/Horror'
import Mystery from '../Components/Categories/Movies/Genres/Mystery/Mystery'
import PostApocalypse from '../Components/Categories/Movies/Genres/PostApocalypse/PostApocalypse'
import Romance from '../Components/Categories/Movies/Genres/Romance/Romance'
import Scifi from '../Components/Categories/Movies/Genres/Scifi/Scifi'
import War from '../Components/Categories/Movies/Genres/War/War'

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
        <Fantasy/>
        <Horror/>
        <Mystery/>
        <PostApocalypse/>
        <Romance/>
        <Scifi/>
        <War/>
    </div>
  )
}

export default Movies