import { useContext, useEffect, useState } from 'react'
import { GifsContext } from '../context/GifsContext'
import getGifs from '../utils/getGifs'

export default function useGifs({ keyword = 'random', rating = 'g' } = {}) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [isLoading, setIsLoading] = useState(false)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setIsLoading(true)
    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        setIsLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keywordToUse, setGifs, keyword, rating])

  return { gifs, isLoading }
}
