import { useEffect, useState } from 'react'
import getTrendingTerms from '../utils/getTrendingTerms'

export default function useTrendingTerms() {
  const [trendingTerms, setTrendingTerms] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrendingTerms)
  }, [])

  return trendingTerms
}
