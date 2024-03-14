import React from 'react'
import Action from '../Components/Categories/Series/Genres/Action/Action'
import Adventure from '../Components/Categories/Series/Genres/Adventure/Adventure'
import Biography from '../Components/Categories/Series/Genres/Biography/Biography'
import Comedy from '../Components/Categories/Series/Genres/Comedy/Comedy'
import Crime from '../Components/Categories/Series/Genres/Crime/Crime'
import Drama from '../Components/Categories/Series/Genres/Drama/Drama'
import Fantasy from '../Components/Categories/Series/Genres/Fantasy/Fantasy'
import Horror from '../Components/Categories/Series/Genres/Horror/Horror'
import Mystery from '../Components/Categories/Series/Genres/Mystery/Mystery'
import PostApocalypse from '../Components/Categories/Series/Genres/PostApocalypse/PostApocalypse'
import Romance from '../Components/Categories/Series/Genres/Romance/Romance'
import Scifi from '../Components/Categories/Series/Genres/Scifi/Scifi'
import War from '../Components/Categories/Series/Genres/War/War'
import ShowsSlider from '../Components/Sliders/ShowsSlider'

function Shows() {
  return (
    <div>
        <ShowsSlider/>
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

export default Shows