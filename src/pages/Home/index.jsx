import React, { useEffect } from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useTrendingGifs from '../../hooks/useTrendingGifs'
import useTrendingTerms from '../../hooks/useTrendingTerms'

export default function Home() {
  const trendingGifs = useTrendingGifs()
  const trendingTerms = useTrendingTerms()

  return (
    <>
      <ListOfGifs
        gifs={trendingGifs}
        listTitle='Trending Gifs'
        listTerm={trendingTerms}
      />
    </>
  )
}
