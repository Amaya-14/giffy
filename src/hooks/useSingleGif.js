import { useEffect, useState } from 'react'
import getSingleGif from '../utils/getSingleGif'
import useGifs from './useGifs'

export default function useSingleGif({ id }) {
  const gifs = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gifFromCache)

  useEffect(() => {
    if (!gif) {
      getSingleGif({ ID: id })
        .then(gif => setGif(gif))
    }
  }, [gif, id])

  return gif
}
