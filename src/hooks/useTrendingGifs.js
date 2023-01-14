import { useEffect, useState } from 'react'
import { getTrendingGifs } from '../utils/getTrendingGifs'

export default function useTrendingGifs() {
  const [trendingGifs, setTrendingGifs] = useState([])
  const [isLoadingGifs, setIsLoadingGifs] = useState(false)

  useEffect(() => {
    setIsLoadingGifs(true)
    getTrendingGifs().then(gifs => {
      setTrendingGifs(gifs)
      setIsLoadingGifs(false)
    })
  }, [])

  return { trendingGifs, isLoadingGifs }
}
