'use client'
import React, { useEffect, useState } from 'react'
import topMovies from '@/data/topMovies.json'

const Game = () => {
  const [movies, setMovies] = useState([])
  const [movieIndex, setMovieIndex] = useState(null)

  const loadMovies = async () => {
    setMovies(topMovies)
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <>
      <div className='flex'>
        {movieIndex !== null && <div>{JSON.stringify(movies[movieIndex])}</div>}
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
            const currentMovie = movies[movieIndex]
            console.log(movies, movies[0])
          }}
        >
          {movieIndex === null ? 'Begin Game' : 'Next Movie'}
        </button>
      </div>
    </>
  )
}

export default Game
