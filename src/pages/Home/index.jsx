import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useTrendingGifs from '../../hooks/useTrendingGifs'
import useTrendingTerms from '../../hooks/useTrendingTerms'
import Spinner from '../../components/Spinner'
import Terms from '../../components/Terms'

export default function Home() {
  const { trendingGifs, isLoadingGifs } = useTrendingGifs()
  const { trendingTerms, isLoadingTerms } = useTrendingTerms()

  return (
    <>
      {isLoadingGifs ? (
        <Spinner />
      ) : (
        <ListOfGifs
          listTitle='Trending Gifs'
          children={isLoadingTerms ? null : <Terms terms={trendingTerms} />}
          gifs={trendingGifs}
        />
      )}
    </>
  )
}
