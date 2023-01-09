import { useEffect, useState } from 'react'
import getSingleGif from '../utils/getSingleGif'
import useGifs from './useGifs'

export default function useSingleGif({ id }) {
  const gifs = useGifs()
  const result = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(result)

  useEffect(() => {
    if (!gif) {
      getSingleGif({ ID: id })
        .then(setGif)
    }
  }, [gif, id])

  return gif
}
