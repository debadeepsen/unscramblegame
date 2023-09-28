import Game from '@/components/Game'
import React from 'react'

const Home = () => {
  return (
    <main>
      <h1 className='flex justify-center'>Guess the scrambled movie name!</h1>
      <Game/>
    </main>
  )
}

export default Home