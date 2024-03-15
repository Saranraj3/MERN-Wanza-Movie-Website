import React from 'react'
import movietheatre from '../Assets/Random/movie-theatre.jpg'
import moviestreaming from '../Assets/Random/movie-streaming.jpeg'
import premiumsubscription from '../Assets/Random/premium-subscription.png'
import developer from '../Assets/Random/developer.png'
function About() {
    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <h1 className='text-white cursor-pointer text-3xl font-mono text-center mt-5'>About</h1>
            <div className='mt-10'>
                <p className='text-white cursor-pointer font-semibold text-lg ml-5'>MOVIE BOOKING</p>
                <p className='text-white max-w-[60rem] font-mono mt-8 ml-3'>We're Not Providing Online Movie Booking Stratergy Maybe Future We Can Provide Just Indroduce What Is Online Movie Booking
                    Enjoy your favourite movie, not just with your friends, but in a cinema hall near you that will be filled with like-minded people. Be a part of everyone's reaction. Dates are already announced, and all you need to do is book the tickets for the preferred date so that you don't end up missing the first-day first show! </p>
                <img className='w-[20rem] h-[10rem] mt-[-8rem] ml-auto mr-5 rounded-md' src={movietheatre} alt="" />
                <p className='text-white cursor-pointer font-semibold text-lg mt-8 text-center'>MOVIE STREAMING</p>
                <img className='ml-3 mt-5 w-[20rem] h-[10rem] rounded-md' src={moviestreaming} alt="" />
                <p className='text-white mt-[-7rem] ml-[25rem] max-w-[50rem] font-mono'>In This Website Not Providing Video streaming is a continuous transmission of video files from a server to a client. Video streaming enables users to view videos online without having to download them. Streamed video content can include movies, TV shows, YouTube videos and livestreamed content. </p>
                <p className='text-white cursor-pointer font-semibold text-lg mt-24 ml-5'>SUBSCRIPTION</p>
                <p className='text-white max-w-[60rem] font-mono mt-8 ml-3'> Premium Subscription means the service allowing any Collector to benefit from the Platform's Services by enjoying privileged conditions (no advertising and additional storage space)
                    Subscription businesses involve selling a product or service and collecting recurring revenue for continuing to provide that service or product. Most subscription businesses charge either monthly or yearly. One of the first and easiest to understand subscriptions.</p>
                <img className='w-[15rem] mt-[-11rem] ml-auto mr-5 rounded-md' src={premiumsubscription} alt="" />
                <p className='text-white cursor-pointer font-semibold text-lg text-center'>DEVELOPER</p>
                  <img className='ml-5 mt-20 w-[7rem] rounded-md' src={developer} alt="" />
                <p className='text-white max-w-[50rem] mt-[-6rem] ml-[15rem] font-mono'>This Whole Website I Created Custom Not A Single API TMDB API I Try But Website Not Working Good Some Issues Basically TMDB Website Not Reloading Some Genres Tv Shows Movies Categorys Not Well Specific I Try Many Times Then I Figured Out What Can I Create A Custom That One Thing This Whole Website you Can See This My Thoughts. </p>
            </div>
        </div>
    )
}

export default About