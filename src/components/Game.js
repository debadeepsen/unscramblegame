'use client'
import React, { useEffect, useState } from 'react'
import topMovies from '@/data/topMovies.json'

const Game = () => {
  const [movies, setMovies] = useState([])
  const [currentMovie, setCurrentMovie] = useState({})

  const loadMovies = async () => {
    setMovies(topMovies)
  }

  const getCurrentMovie = () => {
    return currentMovie
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <>
      <div className='flex'>
        <div></div>
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
            <button
              onClick={() => {
                document.write(getCurrentMovie())
              }}
            >
              Begin Game
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
