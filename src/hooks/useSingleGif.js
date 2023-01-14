import { useEffect, useState } from 'react'
import getSingleGif from '../utils/getSingleGif'
import useGifs from './useGifs'

export default function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gifFromCache)
  const [isloading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ ID: id })
        .then(gif => {
          setGif(gif)
          setIsLoading(false)
        })
    }
  }, [gif, id])

  return { gif, isloading }
}
