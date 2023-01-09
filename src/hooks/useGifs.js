import { useContext, useEffect } from 'react'
import { GifsContext } from '../context/GifsContext'
import getGifs from '../utils/getGifs'

export default function useGifs({ keyword = 'random', rating = 'g' } = {}) {
  const { gifs, setGifs } = useContext(GifsContext)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keywordToUse, setGifs, keyword, rating])

  return gifs
}
