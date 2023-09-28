'use client'
import React, { useEffect, useState } from 'react'
import topMovies from '@/data/topMovies.json'
import { Movie } from '@/utils/types'
import { scramble } from '@/utils/lib'

const Game = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [movieIndex, setMovieIndex] = useState<number | null>(null)
  const [show, setShow] = useState(false)
  const getCurrentMovie = () => movies[movieIndex]
  const [scrambledMovie, setScrambledMovie] = useState('')

  const loadMovies = async () => {
    setMovies(topMovies as Movie[])
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <>
      <div>
        {movieIndex !== null && (
          <div className='flex flex-col justify-center items-center m-10'>
            <h4 className='-mt-2'>Movie {movieIndex + 1}</h4>
            <div className='flex'>
              <div className='scrambled'>
                {!show ? scrambledMovie : getCurrentMovie().title}
              </div>
              <div className='ml-2 flex justify-center items-center'>
                <button
                  className='py-1 px-2 rounded-full'
                  onClick={() => {
                    setScrambledMovie(scramble(getCurrentMovie().title))
                  }}
                >
                  <i className='lni lni-reload'></i>
                </button>
              </div>
            </div>
            <div className='flex mt-2 text-xs'>
              <div className='rounded-sm p-2 bg-purple-100 text-purple-700 mr-2'>
                <i className='lni lni-calendar mr-1'></i>
                {new Date(getCurrentMovie().release_date).toLocaleDateString(
                  'en-US',
                  { dateStyle: 'long' }
                )}
              </div>
              <div className='rounded-sm p-2 bg-green-100 text-green-700'>
                <i className='lni lni-star-fill mr-1'></i>
                {getCurrentMovie().vote_average} stars
              </div>
            </div>
          </div>
        )}
        <div>
          <div>
            <h2 className='ml-5'>Rules</h2>
            <ul>
              <li>All movies are from the IMDb top 50 list</li>
              <li>
                If a movie has a space in its name, it will stay in its place,
                with the characters jumbled
              </li>
              <li>Any apostrophe (&apos;) will be omitted</li>
              <li>
                In case of a movie being part of a series/franchise (
                <em>e.g.</em> Captain America: The First Avenger), only the
                second part will be considered
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center my-4'>
        <button
          onClick={() => {
            setShow(false)
            const newIndex = movieIndex === null ? 0 : movieIndex + 1
            setMovieIndex(newIndex)
            setScrambledMovie(scramble(movies[newIndex].title))
          }}
        >
          {movieIndex === null ? <i className='mr-2 lni lni-game'></i> : null}
          {movieIndex === null ? 'Begin Game' : 'Next Movie'}
          {movieIndex === null ? null : (
            <i className='ml-2 relative top-[2px] lni lni-angle-double-right'></i>
          )}
        </button>
      </div>
    </>
  )
}

export default Game
