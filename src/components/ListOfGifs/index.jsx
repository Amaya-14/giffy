import React, { useState, useEffect } from 'react'
import { getGifs } from '../../utils/getGifs'
import Gif from '../Gif'

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([])
  const { keyword } = params
  useEffect(() => {
    getGifs({ keyword }).then((gif) => setGifs(gif))
  }, [keyword])

  return (
    <div>
      {gifs.map((gif) => (
        <Gif
          key={gif.id}
          gif={gif}
        />
      ))}
    </div>
  )
}
