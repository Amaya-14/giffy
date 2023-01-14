import { useEffect, useState } from 'react'
import getTrendingTerms from '../utils/getTrendingTerms'

export default function useTrendingTerms() {
  const [trendingTerms, setTrendingTerms] = useState([])
  const [isLoadingTerms, setIsLoadingTerms] = useState(false)

  useEffect(() => {
    setIsLoadingTerms(true)
    getTrendingTerms().then(terms => {
      setTrendingTerms(terms)
      setIsLoadingTerms(false)
    })
  }, [])

  return { trendingTerms, isLoadingTerms }
}
