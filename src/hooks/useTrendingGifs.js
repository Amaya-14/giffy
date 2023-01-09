import { useEffect, useState } from 'react'
import { getTrendingGifs } from '../utils/getTrendingGifs'

export default function useTrendingGifs() {
  const [trendingGifs, setTrendingGifs] = useState([])

  useEffect(() => {
    getTrendingGifs().then(setTrendingGifs)
  }, [])

  return trendingGifs
}
