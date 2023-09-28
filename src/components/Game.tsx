'use client'
import React, { useEffect, useState } from 'react'
import topMovies from '@/data/topMovies.json'
import { Movie } from '@/utils/types'
import { scramble } from '@/utils/lib'

const Game = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [movieIndex, setMovieIndex] = useState<number | null>(null)
  const getCurrentMovie = () => movies[movieIndex]

  const loadMovies = async () => {
    setMovies(topMovies as Movie[])
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <>
      <div className='flex'>
        {movieIndex !== null && (
          <div>
            <div className='scrambled'>{scramble(getCurrentMovie().title)}</div>
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
            const newIndex = movieIndex === null ? 0 : movieIndex + 1
            setMovieIndex(newIndex)
          }}
        >
          {movieIndex === null ? 'Begin Game' : 'Next Movie'}
        </button>
      </div>
    </>
  )
}

export default Game
