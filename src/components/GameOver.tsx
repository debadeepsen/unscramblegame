/* eslint-disable @next/next/no-img-element */
import React from 'react'

const GameOver = () => {
  return (
    <div className='z-10 bg-zinc-900/50 absolute top-0 left-0 w-screen h-screen flex justify-center items-center'>
      <div className='shadow-xl bg-white p-20 -mt-10 flex flex-col justify-center items center'>
        <img
          alt='graphic'
          src='/undraw_playing_cards_cywn.svg'
          width={512}
          className='mb-2'
        />
        <div className='text-center'>That was all! Thanks for playing!</div>
      </div>
    </div>
  )
}

export default GameOver
